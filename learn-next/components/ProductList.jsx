import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { fatchProducts } from '@/api';

function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fatchProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {products &&
          products.map(product => {
            return (
              <li key={product.id} className={styles.item}>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.imageUrl}
                    width={250}
                    height={250}
                    alt=""
                  ></Image>
                  <div>{product.name}</div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default ProductList;
