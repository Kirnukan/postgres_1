import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigService } from '../services/config.service';
export function getOrmConfig(): PostgresConnectionOptions {
  const config = new ConfigService();
  return {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    namingStrategy: new SnakeNamingStrategy(),
    entities: ['entities/*.entity{.js,.ts}'],
    synchronize: false,
    migrations: ['migrations/**/*{.js,.ts}'],
    migrationsTableName: 'migrations',
    logging: 'all',
    cli: {
      migrationsDir: 'src/migrations'
    }
  };
}


