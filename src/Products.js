import React, { useState, useEffect } from "react";
import "./Products.css" 

const Products=()=> {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        setData(result);
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }, []);

  if (!loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <ul className="products">
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Products;