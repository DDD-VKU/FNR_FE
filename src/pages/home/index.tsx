import ProductCard from "@/components/ProductCard";
import Header from "@/pages/layouts/Header";
import Image from "next/image";

const HomePage = () => {
    const products = Array.from({ length: 10 }, (_, i) => ({
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
            {/* browse the range */}
            <section className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Browse The Range</h2>
                <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex justify-center space-x-6">

                    <div className="max-w-xs">
                        {/* <img src="" alt="Dining" className="rounded-lg w-full mb-4"> */}
                        <Image
                            src={'/assets/images/dining.png'}
                            width={380}
                            height={480}
                            alt=""
                        />
                        <h3 className="text-lg font-semibold">Dining</h3>
                    </div>

                    <div className="max-w-xs">
                        <Image
                            src={'/assets/images/living-room.png'}
                            width={380}
                            height={480}
                            alt=""
                        />
                        <h3 className="text-lg font-semibold">Living</h3>
                    </div>

                    <div className="max-w-xs">
                        {/* <img src="" alt="Bedroom" className="rounded-lg w-full mb-4"> */}
                        <Image
                            src={'/assets/images/bed-room.png'}
                            width={380}
                            height={480}
                            alt=""
                        />
                        <h3 className="text-lg font-semibold">Bedroom</h3>
                    </div>
                </div>
            </section>
            {/* our products */}
            <section className="container mx-auto p-4 items-center justify-between">
                <h1 className="text-5xl font-bold mt-4 text-center items-center justify-center">Our Products</h1>
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
}

export default HomePage;