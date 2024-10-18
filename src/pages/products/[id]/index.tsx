import { useRouter } from "next/router";

const ProductDetail = () => {
  const id = useRouter().query.id;

  return (
    <>
      <h1 className="text-3xl">Product có id {id}</h1>
    </>
  );
};

export default ProductDetail;
