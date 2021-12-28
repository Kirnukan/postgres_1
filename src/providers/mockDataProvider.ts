import {DataProviderInterface} from "../interfaces/dataProvider.interface";
import {RepositoryInterface} from "../interfaces/repository.interface";

class MockRepository<TEntity> implements RepositoryInterface<TEntity> {
    async findAll(): Promise<TEntity[]> {
        // @ts-ignore
        return [{id: 'sdasd'}];
    }

    async findOne(): Promise<TEntity> {
        throw Error('Not implemented');
    }

    delete(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }
}

export class MockDataProvider implements DataProviderInterface {
    async connect(): Promise<void> {
        // TODO: nothing to do
    }

    async disconnect(): Promise<void> {
        // TODO: nothing to do
    }

    getRepository<TEntity>(): RepositoryInterface<TEntity> {
        return new MockRepository();
    }

}
