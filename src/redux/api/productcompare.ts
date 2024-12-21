import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductCompare } from "@/utils/types";

export const productComparisonApi = createApi({
  reducerPath: "productComparisonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProductsForComparison: builder.query<
      IProductCompare[],
      { productId1: string; productId2: string }
    >({
      query: ({ productId1, productId2 }) =>
        `products/compare?ids=${productId1},${productId2}`,
    }),
  }),
});

export const { useGetProductsForComparisonQuery } = productComparisonApi;
