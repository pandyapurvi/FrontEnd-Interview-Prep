import React, { useState, useEffect } from 'react';
import './styles.css';

const ImageDataLoader = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/product?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const result = await response.json();
        if (result && result.products && result.products.length) {
          setProductData((prev) => [...prev, ...result.products]);
          // setProductData(result.products)
        }
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    FetchProduct();
  }, [count]);

  useEffect(() => {
    if (productData.length === 100) {
      setDisabled(true);
    }
  }, [productData]);
  // console.log(productData)
  // console.log(count)

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <>
      <div className="product-card-container">
        <h1>Image Data Loader</h1>
        <div className="product-card">
          {productData.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img alt={product.title} src={product.thumbnail} />
                <h4>{product.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="product-card-button"
        onClick={() => setCount(count + 1)}
        disabled={disabled}
      >
        Load more data
      </button>
      <p>We have fetched {productData.length}</p>
    </>
  );
};

export default ImageDataLoader;
