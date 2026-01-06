import ProductCart from "../components/ProductCart";
import { products } from "../services/products";

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <div className="flex gap-4 mb-6">
        {["Fashion", "Electronics", "Footwear"].map(cat => (
          <button
            key={cat}
            className="border px-4 py-2 rounded hover:bg-black hover:text-white"
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
