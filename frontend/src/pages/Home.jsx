import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/products") // Use the full backend URL
      .then((res) => {
        console.log("API Response:", res.data); // Log the response data
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.isArray(products) && products.map((product) => (
          <div key={product._id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <button
              onClick={() => dispatch(addItem(product))}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;