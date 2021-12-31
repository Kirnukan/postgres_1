import { EntityInterface } from './entity.interface';

export interface RepositoryInterface<TEntity extends EntityInterface> {
  findAll(): Promise<TEntity[]>;

  findOne(id: string): Promise<TEntity>;

  delete(id: string): Promise<void>;
}
