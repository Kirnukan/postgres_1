import { RepositoryInterface } from './repository.interface';
import { BaseClass } from '../entities/BaseClass';

export interface DataProviderInterface {
  getRepository<TEntity extends BaseClass>(
    entity: new () => TEntity
  ): RepositoryInterface<TEntity>;
}
