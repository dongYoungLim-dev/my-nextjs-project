import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';

function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/products').then(response => {
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
                <Image
                  src={product.imageUrl}
                  width={250}
                  height={250}
                  alt=""
                ></Image>
                <div>{product.name}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default ProductList;
