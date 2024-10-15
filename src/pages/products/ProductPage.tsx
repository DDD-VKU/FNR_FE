import Header from "../layouts/Header";

const ProductPage = () => {
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
                  alt="Filter Icon"
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
                  alt="Filter Icon"
                />
              </a>
                <span>Grid</span>
              </button>
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                {/* Add list view Icon */}
                <a href="">
                <img
                  src="/assets/icons/bi_view-list.svg"
                  width={28}
                  height={28}
                  alt="Filter Icon"
                />
              </a>
                <span>List</span>
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
    </>
  );
};

export default ProductPage;
