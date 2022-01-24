import { ListenerInterface, EMethod, THandler } from './interfaces/listener.interface';
import http from 'http'
import { configService } from './services/config.service';
import express from 'express'
import cors from 'cors'
import { swaggerSpec } from './swagger';
import swaggerUI from 'swagger-ui-express'
import { Connection } from 'typeorm';

export class ExpressServer implements ListenerInterface {
    private port: number;
    private httpServer: http.Server | null = null;
    private app: express.Application;
    connection: Connection | null = null;

    private serverExistence () {
        if (this.httpServer) {
            return this.httpServer;
        } 
        throw 'Server does not exist'
    }
    
    constructor () {
        this.port = configService.port;
        this.app = express();
        this.app.use(express.static('../static'));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
    }
    start(): Promise<void> {
        return new Promise((resolve) => {
            this.httpServer = this.app.listen(this.port, resolve);
            console.log('Server has been started...');
        });
    }
    stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.serverExistence().close((err) => {
                reject(err);
            });
            resolve();
        });
    }
    addHandler(method: EMethod, route: string, handler: THandler): void {
        this.serverExistence();
        switch (method) {
            case 'GET':
               this.app.get(route, async (req, res) => {
                  res.send(await handler(req));
               });
               return;
            case 'POST':
               this.app.post(route, async (req, res) => {
                  res.send(await handler(req));
               });
               return;
            case 'PUT':
               this.app.put(route, async (req, res) => {
                  res.send(await handler(req));
               });
               return;
            case 'DELETE':
               this.app.delete(route, async (req, res) => {
                  res.send(await handler(req));
               });
               return;
         }
    }
}