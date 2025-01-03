import { useRouter } from "next/router";

const ShowMore = () => {
  const route = useRouter();
  return (
    <>
      <div className="flex justify-center mt-4 mb-12">
        <button
          className="bg-white text-[#B88E2F] py-2 px-12 font-semibold border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white duration-300"
          onClick={() => {
            route.push("/products");
          }}
        >
          Show More
        </button>
      </div>
    </>
  );
};

export default ShowMore;
