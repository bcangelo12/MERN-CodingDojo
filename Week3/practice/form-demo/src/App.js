import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Form from "./components/Form";
import { useState } from "react";
function App() {
    const [products, setProducts] = useState([]);
    return (
        <div className="App">
            <Form products={products} setProducts={setProducts} />
            {products.map((product) => {
                return (
                    <Product
                        key={product.id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    />
                );
            })}
            {/* map will return [Product,Product,Product,Product] */}
        </div>
    );
}

export default App;
