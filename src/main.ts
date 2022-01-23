import { Server } from 'http';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getOrmConfig } from './config/typeorm';
import { ExpressServer } from './server';
import { configService } from './services/config.service';

async function main() {
    const expressServer = new ExpressServer();
    
    const ormConnection = await createConnection(getOrmConfig());
    await ormConnection.runMigrations();

    await expressServer.start();
}


main().then();


















