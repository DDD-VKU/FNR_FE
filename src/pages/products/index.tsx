import ProductCard from "@/components/ProductCard";
import Header from "../layouts/Header";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Footer from "../layouts/Footer";
import FeatureCard from "@/components/FeatureCard";
import HeadImage from "@/components/HeadImage";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { useEffect, useState } from "react";
import { IProductInShop, IProductItem } from "@/utils/types";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";

const ProductPage = () => {
  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetProductsQuery({});
  const [products, setProducts] = useState<IProductInShop[]>([]);
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  // Cập nhật danh sách sản phẩm khi nhận từ API
  useEffect(() => {
    if (productsResponse) {
      setProducts(productsResponse.data || []);
    }
  }, [productsResponse]);

  //  Tính toán sản phẩm hiển thị theo trang
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // Hàm kiểm tra là sản phẩm mới
  function isNewProduct(created_at: string): boolean {
    const currentDate = new Date();
    const sevenDaysAgo = new Date(
      currentDate.setDate(currentDate.getDate() - 7)
    );

    const productDate = new Date(created_at);
    return productDate > sevenDaysAgo;
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (isLoading) return <Loading />;
  if (isError)
    return <div>Error loading products. Please try again later.</div>;
  return (
    <>
      <Header />
      <HeadImage />
      <section className="w-full bg-[#F9F1E7] p-4 shadow rounded-md">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              <a href="">
                <Image
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
                <a href="">
                  <Image
                    src="/assets/icons/ci_grid-big-round.svg"
                    width={28}
                    height={28}
                    alt=""
                  />
                </a>
              </button>
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                <a href="">
                  <Image
                    src="/assets/icons/bi_view-list.svg"
                    width={28}
                    height={28}
                    alt=""
                  />
                </a>
              </button>
            </div>
          </div>

          <div className="text-gray-500 text-center lg:text-left">
            {/* Showing {currentProducts.length} of {products.length} products */}
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <span>Show</span>
              <select
                className="border border-gray-300 rounded p-2"
                value={productsPerPage}
                onChange={(e) => setProductsPerPage(Number(e.target.value))}
              >
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

      {/* Products */}
      <section className="container mx-auto p-4 items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {currentProducts.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              type={product.type}
              image={product.image}
              price={product.price * (1 - product.sale_percent / 100)}
              discount_percent={product.sale_percent}
              price_before_discount={product.price}
              is_new_product={isNewProduct(product.created_at)}
            />
          ))}
        </div>
      </section>
      {/* phân trang
      <section className="flex justify-center items-center mt-12 mb-16">
        <div className="App">
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </section> */}

      {/* phân trang */}
      <section className="flex justify-center items-center mt-12 mb-16">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(products.length / productsPerPage)}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </section>

      <FeatureCard />
      <Footer />
    </>
  );
};

export default ProductPage;
