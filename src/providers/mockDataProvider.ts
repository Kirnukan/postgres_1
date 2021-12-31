import { DataProviderInterface } from '../interfaces/dataProvider.interface';
import { RepositoryInterface } from '../interfaces/repository.interface';
import { EntityInterface } from '../interfaces/entity.interface';

class MockRepository<TEntity extends EntityInterface>
  implements RepositoryInterface<TEntity>
{
  async findAll(): Promise<TEntity[]> {
    return [];
  }

  async findOne(): Promise<TEntity> {
    throw Error('Not implemented');
  }

  async delete(): Promise<void> {
    throw Error('Not implemented');
  }
}

export class MockDataProvider implements DataProviderInterface {
  async connect(): Promise<void> {
    // TODO: nothing to do
  }

  async disconnect(): Promise<void> {
    // TODO: nothing to do
  }

  getRepository<
    TEntity extends EntityInterface
  >(): RepositoryInterface<TEntity> {
    return new MockRepository();
  }
}
