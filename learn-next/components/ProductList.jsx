import axios from 'axios';
import { useEffect, useState } from 'react';

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
          products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
    </div>
  );
}
export default ProductList;
