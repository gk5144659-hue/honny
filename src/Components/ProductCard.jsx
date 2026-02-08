
import "./ProductCard.css";

const ProductCard = ({product, addToCart, removeFromCart, cart}) => {
    const isAdded = cart.some(item => item.id === product.id)

    const handleClick = () => {
       if (isAdded) {
        removeFromCart(product.id);
       }else{
        addToCart(product);
       }
    };

  return (
     <div className="product-card">
        <img src={product.image} alt={product.title} />

        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <span>₹{product.price}</span>

        <button
          onClick={handleClick}
          className={isAdded ? "remove" : "add"}
        >
         {isAdded ? "Cancel" : "Buy Now"}
         </button>
     </div>
  );
};

export default ProductCard;