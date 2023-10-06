import { useEffect, useState } from "react";
import "./Products.css";
export function Products({ results = [] }) {
  const [products, setProducts] = useState(results);

  useEffect(() => {
    if (!results?.items) return;
    setProducts(results.items);
  }, [results]);

  return (
    <section className="products-container">
      {products.map(({ id, title, picture, price, free_shipping: freeShipping }) => (
        <div className="product-container" key={id}>
          <img src={picture} alt="Product Image" />
          <div className="product-info">
            <h2 className="product-price">
              {price.amount.toLocaleString("es-AR", {
                style: "currency",
                currency: price.currency,
              })}
            </h2>
            <p className="product-title">{title}</p>
          </div>
          {freeShipping && <p className="free-shipping">Envío gratis!</p>}
        </div>
      ))}
    </section>
  );
}
