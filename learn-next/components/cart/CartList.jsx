import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';

export default function CartList({ cartList }) {
  const router = useRouter();

  const totalPrice = cartList.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  const removeCart = async id => {
    // 01. 삭제 API 호출
    const { data } = await removeCartItem(id);
    alert(`${data.name}삭제 되었습니다.`);
    // 02. 상품 목록 갱신
    router.replace(router.asPath);
  };

  return (
    <div>
      <ul>
        {cartList &&
          cartList.map(cart => {
            const { id, name, price, imageUrl } = cart;
            const { container, cartInfo } = styles;
            return (
              <li key={id} className={container}>
                <div>
                  <Image src={imageUrl} alt={name} width={70} height={70} />
                </div>
                <div className={cartInfo}>
                  <p>{name}</p>
                  <p>{price}</p>
                  <button onClick={() => removeCart(id)}>삭제하기</button>
                </div>
              </li>
            );
          })}
      </ul>
      <div>
        <p>총 가격: {totalPrice}</p>
        <p>총 수량: {cartList.length}</p>
      </div>
    </div>
  );
}
