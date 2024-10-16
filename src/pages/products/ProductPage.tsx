import ProductCard from "@/components/ProductCard";
import Header from "../layouts/Header";


const ProductPage = () => {
  const products = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
    type: "Sample Type",
    image: `/assets/images/products.png`,
    price: 100 + i * 10,
    discount_percent: 10 + i,
    price_before_discount: 150 + i * 10,
}));
  return (
    <>
      <Header />
      <section className="w-full bg-white p-4 shadow rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              {/* Add filter icon  */}
              <a href="">
                <img
                  src="/assets/icons/system-uicons_filtering.svg"
                  width={28}
                  height={28}
                  alt=""
                />
              </a>
              <span>Filter</span>
            </button>

            <div className="flex space-x-2">
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                {/* Add grid view icon  */}
                <a href="">
                <img
                  src="/assets/icons/ci_grid-big-round.svg"
                  width={28}
                  height={28}
                  alt=""
                />
              </a>
                
              </button>
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                {/* Add list view Icon */}
                <a href="">
                <img
                  src="/assets/icons/bi_view-list.svg"
                  width={28}
                  height={28}
                  alt=""
                />
              </a>
                
              </button>
            </div>
          </div>

          {/* Showing Results */}
          <div className="text-gray-500">Showing 1-16 of 32 results</div>

          {/* Show and Sort Options */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>Show</span>
              <select className="border border-gray-300 rounded p-2">
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span>Sort by</span>
              <select className="border border-gray-300 rounded p-2">
                <option value="default">Default</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4 items-center justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            type={product.type}
                            image={product.image}
                            price={product.price}
                            discount_percent={product.discount_percent}
                            price_before_discount={product.price_before_discount}
                        />
                    ))}
                </div>

            </section>
    </>
  );
};

export default ProductPage;
