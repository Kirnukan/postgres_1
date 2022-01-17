import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import {ConfigService} from '../services/config.service';

export function getOrmConfig(): PostgresConnectionOptions {
    const config = new ConfigService();

    return {
        type: 'postgres',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        entities: ['entities/**/*.entity.js'],
        migrations: ['migrations/**/*.js'],
        migrationsTableName: 'migrations',
        namingStrategy: new SnakeNamingStrategy(),
        logging: 'all',
        cli: {
            migrationsDir: 'src/migrations',
        },
    };
}

