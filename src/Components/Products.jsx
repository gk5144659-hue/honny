import React from 'react'
import ProductCard from "./ProductCard";

const products =[
    {
    id: 1,
    title: "Men T-Shirt",
    price: 499,
    desc: "Cotton casual t-shirt",
    image: "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_1280.jpg"
  },
  {
    id: 2,
    title: "Women Kurti",
    price: 899,
    desc: "Stylish printed kurti",
    image: "https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg"
  },
  {
    id: 3,
    title: "Shoes",
    price: 1299,
    desc: "Comfortable running shoes",
    image: "https://cdn.pixabay.com/photo/2016/12/15/12/12/shoes-1908733_1280.jpg"
  },
  {
    id: 4,
    title: "Watch",
    price: 1999,
    desc: "Smart fitness watch",
    image: "https://www.horusstraps.in/cdn/shop/files/rolex-gmt-batman-blue-rubber-watch-band-strap_1000x_86d056ca-41f9-4c68-83ff-891552c02067_800x.jpg?v=1719577784"
  },
  {
    id: 5,
    title: "Backpack",
    price: 699,
    desc: "Waterproof travel bag",
    image: "https://icon.in/cdn/shop/files/1_5b7bd7ae-1e7e-4cbe-a7fc-2f6d8b64f082.jpg?v=1763107481"
  },
  {
    id: 6,
    title: "Headphones",
    price: 1499,
    desc: "Noise cancelling headphones",
    image: "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/247112_0_c8lp7o.png"
  },
  {
    id: 7,
    title: "Sunglasses",
    price: 599,
    desc: "UV protection glasses",
    image: "https://m.media-amazon.com/images/I/71jiEpKjdEL.jpg"
  },
  {
    id: 8,
    title: "Laptop Bag",
    price: 999,
    desc: "Office laptop bag",
    image: "https://m.media-amazon.com/images/I/61+3SlCu8oL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 9,
    title: "Mobile Cover",
    price: 299,
    desc: "Shockproof mobile cover",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/4/XX/DL/CX/102234567/apple-iphone-12-pro-mobile-back-cover.JPG"
  },
  {
    id: 10,
    title: "Wireless Mouse",
    price: 499,
    desc: "Smooth wireless mouse",
    image: "https://m.media-amazon.com/images/I/61OwbbvdJqL.jpg"
  }
]

const Products = ({addToCart, removeFromCart, cart, search}) => {
    const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
         {filteredProducts.length > 0 ? (
         filteredProducts.map((item) => (
            <ProductCard key={item.id}
             product={item}
             addToCart={addToCart}
             removeFromCart={removeFromCart}
             cart= {cart} />
        ))
         ):(
          <h2>No products found</h2>
         )}
    </div>
  );
};

export default Products;