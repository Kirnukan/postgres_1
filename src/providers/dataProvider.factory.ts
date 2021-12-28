import {MockDataProvider} from "./mockDataProvider";
import {DataProviderInterface} from "../interfaces/dataProvider.interface";
import {PostgresDataProvider} from "./postgresDataProvider";

export function dataProviderFactory(): DataProviderInterface {
    return new MockDataProvider();
    // return new PostgresDataProvider('localhost', 'postgres', 'password');
}
