import styled from 'styled-components';

import { useEffect } from 'react';
import useProductFormStore from '../../../hooks/useProductFormStore';

import numberFormat from '../../../utils/numberFormat';
import useProductDetailStore from '../../../hooks/useProductDetailStore';

const Container = styled.div`
  margin-block: .8rem;
  font-weight: bold;
`;

export default function Price() {
  const [{ product }] = useProductDetailStore();
  const [{ price }, productFormStore] = useProductFormStore();

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);

  return (
    <Container>
      {numberFormat(price)}
      원
    </Container>
  );
}
