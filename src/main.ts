import { dataProviderFactory } from './providers/dataProvider.factory';
import { ProductService } from './services/product.service';

async function main() {
  const provider = dataProviderFactory();
  const productsService = new ProductService(provider);
  const products = await productsService.getAllProducts();

  console.log(products);
}

main().then();
