import Image from 'next/image';
import styles from '@/components/product-detail/ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { id, name, price, imageUrl } = productDetail;

  const addCart = async () => {
    const response = await createCartItem(productDetail);
    console.log(response);
    router.push('/cart');
  };
  return (
    <div className={styles.container}>
      <div>
        <Image src={imageUrl} alt={name} width={250} height={250} />
      </div>
      <div className={styles.productInfo}>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addCart}>장바구니 담기</button>
      </div>
    </div>
  );
}
