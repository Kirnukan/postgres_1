import { RepositoryInterface } from './repository.interface';
import { EntityInterface } from './entity.interface';

export interface DataProviderInterface {
  connect(): Promise<void>;

  disconnect(): Promise<void>;

  getRepository<TEntity extends EntityInterface>(
    entity: new () => TEntity
  ): RepositoryInterface<TEntity>;
}
