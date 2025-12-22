import Image from 'next/image';
import styles from './CartList.module.css';

export default function CartList({ cartList }) {
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
                </div>
              </li>
            );
          })}
      </ul>
      <div>
        <p>총 가격:</p>
        <p>총 수량:</p>
      </div>
    </div>
  );
}
