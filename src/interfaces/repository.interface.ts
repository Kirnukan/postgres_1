import { BaseClass } from '../entities/BaseClass';

export interface RepositoryInterface<TEntity extends BaseClass> {
  findAll(): Promise<TEntity[]>;

  findOne(id: string): Promise<TEntity>;

  delete(id: string): Promise<void>;

  create(req: {}): Promise<void>;
}
