import { RepositoryInterface } from './repository.interface';
import { BaseClass } from '../entities/BaseClass';

export interface DataProviderInterface {
  connect(): Promise<void>;

  disconnect(): Promise<void>;

  getRepository<TEntity extends BaseClass>(
    entity: new () => TEntity
  ): RepositoryInterface<TEntity>;
}
