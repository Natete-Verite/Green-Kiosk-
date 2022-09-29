import "./App.css";
import Form from "./Form";
import Fruits from "./Fruit";
import Product from "./Products";
import Vegetables from "./vegetable";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="top">
          <Link className="link" to="/login">
           <button>Login</button>
          </Link>
          <Link className="link" to="/products">
            <button>Products</button>
          </Link>
          <Link className="link" to="/fruits">
            <button>Fruits</button>
          </Link>
          <Link className="link" to="/vegetables">
            <button>Vegetables</button>
          </Link>
        </div> 
        <Routes>
          <Route 
            path="/fruits" 
            element={<Fruits />} 
            exact 
            component={Fruits} 
          />
          <Route 
            path="/login" 
            element={<Form />} 
            exact 
            component={Form} 
          />
          <Route
            path="/products"
            element={<Product />}
            exact
            component={Product}
          />
          <Route
            path="/vegetables"
            element={<Vegetables />}
            exact
            component={Vegetables}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
