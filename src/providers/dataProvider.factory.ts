import { MockDataProvider } from './mockDataProvider';
import { DataProviderInterface } from '../interfaces/dataProvider.interface';

export function dataProviderFactory(): DataProviderInterface {
  return new MockDataProvider();
  // return new PostgresDataProvider('localhost', 'postgres', 'password');
}
