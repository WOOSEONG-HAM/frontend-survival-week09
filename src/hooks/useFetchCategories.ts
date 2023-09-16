import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffectOnce } from 'usehooks-ts';
import CategoriesStore from '../stores/CategoriesStore';

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useStore(store);
  console.log('🚀 ~ file: useFetchCategories.ts:10 ~ useFetchCategories ~ categories:', categories);

  useEffectOnce(() => {
    store.fetchCategories();
  });

  return { categories };
}
