import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
  const pageTitle = '상품목록 페이지';
  return (
    <div>
      <ProductHeader title={pageTitle} />
      <ProductList></ProductList>
    </div>
  );
}

export default ProductPage;
