import { fatchCarts } from '@/api';
import CartList from '@/components/cart/CartList';
import ProductHeader from '@/components/ProductHeader';

function CartPage({ carts }) {
  const pageTitle = '장바구니 페이지';
  return (
    <div>
      <ProductHeader title={pageTitle} />
      <CartList cartList={carts} />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await fatchCarts();
  return {
    props: {
      carts: data,
    },
  };
}

export default CartPage;
