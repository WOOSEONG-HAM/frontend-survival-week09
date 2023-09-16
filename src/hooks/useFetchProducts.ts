import { useStore } from 'usestore-ts';
import { container } from 'tsyringe';
import { useEffect } from 'react';
import { ProductSummary } from '../types';
import ProductsStore from '../stores/ProductsStore';

export default function useFetchProducts({ categoryId }: {
  categoryId?: string;
}): {
  products: ProductSummary[];
} {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ categoryId });
  }, [store, categoryId]);

  return { products };
}
