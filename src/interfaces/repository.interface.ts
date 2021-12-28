export interface RepositoryInterface<TEntity> {
    findAll(): Promise<TEntity[]>;
    findOne(): Promise<TEntity>;
    delete(id: string): Promise<void>;
}
