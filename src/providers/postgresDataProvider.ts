import { DataProviderInterface } from "src/interfaces/dataProvider.interface";
import { Connection } from "typeorm";

export class PostgresDataProvider implements DataProviderInterface {
  private connection!: Connection;
  
  getRepository<TEntity>(entity: new () => TEntity) {
    return this.connection.getRepository(entity)
  }
}
