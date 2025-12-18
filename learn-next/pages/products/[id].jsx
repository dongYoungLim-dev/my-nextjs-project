import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProductDetailPage({ productInfo }) {
  // 아래는 주석 코드는 내가 생각한 코드 이다.
  // const [productDetail, setProductDetail] = useState();
  // useEffect(() => {
  //   axios.get(`http://localhost:4000/products/${id}`).then(response => {
  //     setProductDetail(response.data);
  //   });
  // }, [id]);
  const pageTitle = '상품 상세 페이지';
  return (
    <div>
      <ProductHeader title={pageTitle} />
      <div>{productInfo.name}</div>
    </div>
  );
}
// TODO 내가 작성한 코드와 뭐가 다른지 생각해보기
export async function getServerSideProps(context) {
  let id = context.params.id;
  const response = await axios.get(`http://localhost:4000/products/${id}`);
  return {
    props: {
      productInfo: response.data,
    },
  };
}
