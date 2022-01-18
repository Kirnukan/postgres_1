import { DataProviderInterface } from 'src/interfaces/dataProvider.interface';
import { PostgresDataProvider } from './postgresDataProvider';

export function dataProviderFactory(): DataProviderInterface {
  return new PostgresDataProvider();
}
