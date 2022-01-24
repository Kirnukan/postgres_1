import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { configService } from '../services/config.service';

export function getOrmConfig(): PostgresConnectionOptions {
    return {
        type: "postgres",
        host: configService.dbHost,
        port: configService.dbPort,
        username: configService.dbUser,
        password: configService.dbPassword,
        database: configService.dbName,
        entities: ['entities/*.entity{.js,.ts}'],
        migrations: ['migrations/**/*{.js,.ts}'],
        migrationsTableName: "migrations",
        synchronize: false,
        namingStrategy: new SnakeNamingStrategy(),
        logging: "all",
        cli: {
           migrationsDir: "src/migrations",
        },
     };  
}

