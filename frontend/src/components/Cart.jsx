import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../redux/cartSlice'; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('https://basic-e-commerce-y6t9.onrender.com/checkout');  
  };

  const handleRemoveItem = (itemId) => {
    console.log('Removing item with ID:', itemId);  
    dispatch(removeItem(itemId));  
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.map((item) => (
        <div key={item._id} className="border p-4 rounded mb-2">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-lg font-bold">${item.price}</p>
          <button
            onClick={() => handleRemoveItem(item._id)} 
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Cart;