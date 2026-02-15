import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart, removeFromCart, cart }) => {
  const navigate = useNavigate();

  const isAdded = cart.some(item => item.id === product.id);

  const handleCartClick = (e) => {
    e.stopPropagation();

    if (isAdded) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={product.images[0]} alt={product.title} />


      <h3>{product.title}</h3>
      <p>{product.desc}</p>
      <span>₹{product.price}</span>

      <button
        onClick={handleCartClick}
        className={isAdded ? "remove" : "add"}
      >
        {isAdded ? "Cancel" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
