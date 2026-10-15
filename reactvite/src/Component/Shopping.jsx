import React, { useEffect, useState } from 'react';

function Shopping() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Shopping</h1>
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2>${product.price.toFixed(2)}</h2>
          <h2>{product.description}</h2>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
        </div>
      ))}
    </div>
  );
}

export default Shopping;