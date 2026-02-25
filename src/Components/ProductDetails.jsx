import { useParams } from "react-router-dom";
import { products } from "./data";
import { useState } from "react";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) return <h2 className="text-center text-2xl mt-10">Product Not Found</h2>;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* Images Section */}
      <div>
        <img
          src={selectedImage}
          alt={product.title}
          className="w-full max-w-full sm:max-w-md rounded-2xl shadow-lg"
        />

        {/* Thumbnails */}
        <div className="flex flex-wrap gap-4 mt-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setSelectedImage(img)}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer border hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>

        <p className="text-gray-600 mb-4">
          {product.desc}
        </p>

        <h3 className="text-2xl font-semibold text-green-600 mb-6">
          ₹{product.price}
        </h3>

        <button
          onClick={() => addToCart(product)}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl shadow-md transition duration-300 w-fit"
        >
          Add To Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDetails;
