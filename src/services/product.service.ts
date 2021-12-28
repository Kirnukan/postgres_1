import {DataProviderInterface} from "../interfaces/dataProvider.interface";
import {ProductEntity} from "../entities/product.entity";
import {RepositoryInterface} from "../interfaces/repository.interface";

export class ProductService {
    private readonly productsRepository: RepositoryInterface<ProductEntity>;

    constructor(
        dataProvider: DataProviderInterface
    ) {
        this.productsRepository = dataProvider.getRepository(ProductEntity);
    }

    async getAllProducts(): Promise<ProductEntity[]> {
        return this.productsRepository.findAll();
    }
}
