import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function CartList({ cartList }) {
  const router = useRouter();

  const totalPrice = cartList.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  const removeCart = async id => {
    // 01. 삭제 API 호출
    // const { data } = await removeCartItem(id); // 페이지 라우팅 방식 ./api 폴더를 만들어 사용
    const { data } = await axios.post('http://localhost:3000/api/cart', {
      // api 라우팅 방식 /pages/api/ 내부에 api 라우팅 파일 생성 이 차이점 기억하기
      id: id,
    });
    alert(data);
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
