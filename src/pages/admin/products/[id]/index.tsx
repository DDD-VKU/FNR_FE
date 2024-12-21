"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import AdminLayout from "../../layout";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useGetProductsQuery } from "@/redux/api/productApi";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { data: product, isLoading, error } = useGetProductsQuery(params.id);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">Error loading product</div>
    );
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  const discountedPrice =
    product.price - product.price * (product.sale_percent / 100);

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Products
        </button>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.SKU}
              </div>
              <h1 className="mt-1 text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                {product.sale_percent > 0 && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                {product.sale_percent > 0 && (
                  <span className="ml-2 text-sm text-red-600">
                    ({product.sale_percent}% off)
                  </span>
                )}
              </div>
              <div className="mt-4">
                {product.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Created at: {new Date(product.created_at).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
