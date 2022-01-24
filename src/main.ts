import { createConnection } from 'typeorm';
import { getOrmConfig } from './config/typeorm';
import { router } from './routes/routes';
import { ExpressServer } from './server';

async function main() {
    const expressServer = new ExpressServer();
    await expressServer.start();
    const ormConnection = await createConnection(getOrmConfig());
    await ormConnection.runMigrations();
    router(expressServer) ;
}


main().then();


















