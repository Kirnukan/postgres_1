import {DataProviderInterface} from "../interfaces/dataProvider.interface";
import {RepositoryInterface} from "../interfaces/repository.interface";

class PostgresRepository<TEntity> implements RepositoryInterface<TEntity>{
    private connection: string | null;

    constructor(connection: string | null) {
        this.connection = connection;
    }

    async findAll(): Promise<TEntity[]> {
        // @ts-ignore
        return this.connection.query(`select * from products`);
    }

    async findOne(): Promise<TEntity> {
        throw Error('Not implemented');
    }

    delete(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }
}

export class PostgresDataProvider implements DataProviderInterface {
    private hostname: string;
    private user: string;
    private password: string;

    private connection: string | null = null;

    constructor(hostame: string, user: string, password: string) {
        this.hostname = hostame;
        this.user = user;
        this.password = password;
    }

    async connect(): Promise<void> {
        // postgresDriver.connect(this.hostname, this.user)
        this.connection = 'CONNECTED';
    }

    async disconnect(): Promise<void> {
        this.connection = null;
    }

    getRepository<TEntity>(entity: { new(): TEntity }): RepositoryInterface<TEntity> {
        return new PostgresRepository(this.connection);
    }
}
