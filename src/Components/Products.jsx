import ProductCard from "./ProductCard";
import { products } from "./data";


const Products = ({ addToCart, removeFromCart, cart, search }) => {

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(item => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
          />
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
};

export default Products;