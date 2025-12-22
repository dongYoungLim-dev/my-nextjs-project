import { fatchProductItem } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';

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
      <ProductInfo productDetail={productInfo} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let id = context.params.id;
  const { data } = await fatchProductItem(id);
  return {
    props: {
      productInfo: data,
    },
  };
}

/**
 * useEffect 와 next js 에서 제공이 되는 getServerSideProps의 차이는 아래와 같다.
 * useEffect  -> 클라이언트 사이드 랜더링 (브라우저에서 데이터를 api로 데이터를 요청하여 처리)
 * getServerSideProps -> 서버 사이드 랜더링 (서버에서 데이터를 api로 요청하고, 받은 데이터를 채워서 브라우저로 보낸다.)
 */
