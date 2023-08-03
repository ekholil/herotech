import Image from "next/image";
import Link from "next/link";

export type Iproduct = {
  _id: string;
  title: string;
  image: string;
  category: string;
  status: string;
  Price: number;
  description: string;
  keyFeatures: {
    brand: string;
    model: string;
    warrenty: string;
  };
  rating: string;
  averageRating: string;
  reviews: {
    user: string;
    review: string;
  };
};
const Featured = ({ products }: { products: Iproduct[] }) => {
  return (
    <section className="py-[60px] lg:py-28 bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12">
            <h2 className="text-center">Featured Products</h2>
          </div>
          {products?.slice(0, 6).map((product) => (
            <div
              key={product._id}
              className="col-span-12 bg-white md:col-span-6 lg:col-span-4 rounded-md p-2 shadow-lg flex flex-col"
            >
              .
              <Image
                src={product.image}
                width={350}
                alt="productimg"
                className="w-100"
                height={250}
              />
              <Link
                className="text-xl font-semibold grow"
                href={`/products/${product._id}`}
              >
                {product.title}
              </Link>
              <div className="flex justify-between mb-4 items-center">
                <span>Category:{product.category}</span>
                <span>Price:{product.Price}</span>
              </div>
              <div className="flex justify-between mb-4 items-center">
                <span className="text-xs inline-flex mb-3 rounded-full p-2 bg-blue-500">
                  {product.status}
                </span>
                <span>Rating: {product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
