import axios from 'axios';
import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';
import { ProductSummary } from '../types';

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

@singleton()
@Store()
export default class ProductsStore {
  products: ProductSummary[] = [];

  async fetchProducts({ categoryId }: {categoryId?: string}) {
    this.setProducts([]);

    const { data } = await axios.get(`${apiBaseUrl}/products`, {
      params: { categoryId },
    });
    const { products } = data;

    this.setProducts(products);
  }

  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}
