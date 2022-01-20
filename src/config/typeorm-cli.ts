import { getOrmConfig } from './typeorm';

export default [{
    name: 'migrations:generate',
    ...getOrmConfig(),
    entities: ['../entities/**/*.entity.ts'],
}, {
    name: 'migrations:create-run-revert',
    ...getOrmConfig(),
    migrations: ['../migrations/**/*.ts'],
},];
