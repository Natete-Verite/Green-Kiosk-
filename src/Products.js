import React, { useState, useEffect } from "react";
import "./Products.css" 

const Products=()=> {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
           }
    }, [])

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
      <h2>Hello {user}</h2>
      <h3>Welcome to Green Kiosk</h3>
      <h3>Our products</h3>
      <ul className="products">
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Products;