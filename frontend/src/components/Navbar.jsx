import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          E-Commerce
        </Link>
        <div className="flex space-x-4">
          <Link to="/cart" className="text-white">
            Cart
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/register" className="text-white">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;