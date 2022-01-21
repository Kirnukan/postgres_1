import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getOrmConfig } from './config/typeorm';
import { Swagger } from './docs/swagger';
import { Routes } from './routes/routes';
import express from 'express'
import swaggerUI from 'swagger-ui-express'
import { configService } from './services/config.service';
import { Request, Response } from "express";

async function main() {

    const ormConnection = await createConnection(getOrmConfig());
    await ormConnection.runMigrations();

    const swaggerSpec = Swagger();

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    const connection = await createConnection(getOrmConfig());
    await connection.runMigrations();
    app.listen(configService.port);

    Routes.forEach(route => {
        (app as any)[route.method]
            (route.route, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                        result.then(result => result !== null &&
                        result !== undefined ? res.send(result) : 
                        undefined
                    );
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
        });
    });
}


main().then();


















