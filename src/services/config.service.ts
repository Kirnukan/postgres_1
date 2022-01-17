import {env} from 'process';

export class ConfigService {
    get dbHost() {
        return ConfigService.getRequiredEnv('DB_HOST');
    }

    get dbName() {
        return ConfigService.getRequiredEnv('DB_NAME');
    }

    get dbPort() {
        return +ConfigService.getRequiredEnv('DB_PORT');
    }

    get dbUser() {
        return ConfigService.getRequiredEnv('DB_USER');
    }

    get dbPassword() {
        return ConfigService.getRequiredEnv('DB_PASSWORD');
    }

    private static getRequiredEnv(name: string): string {
        const variable = env[name];

        if (!variable) {
            throw new Error(`Variable ${name} is not set`);
        }

        return variable.toString();
    }
}
