import { env } from 'process';

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

    get port() {
        return +ConfigService.getRequiredEnv('port');
    }

    private static getRequiredEnv(name: string): string {
        const envName = env[name];

        if (!envName) {
            throw new Error(`Variable ${name} is not set`);
        }

        return envName.toString();
    }
}

export const configService = new ConfigService();