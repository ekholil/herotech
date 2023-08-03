import { Iproduct } from "@/components/Featured";
import { add } from "@/redux/builderslice";
import { useAppDispatch } from "@/redux/hooks";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductDetails = ({ products }: { products: Iproduct[] }) => {
  const router = useRouter();
  const { name } = router.query;
  const currentProducts = products?.filter(
    (product) => product.category === name
  );

  const dispatch = useAppDispatch();
  const handleAdd = (product: Iproduct) => {
    dispatch(add(product));
    router.push("/pc-builder");
  };
  return (
    <div className="container py-14 lg:py-28">
      <div className="grid grid-cols-12 gap-6">
        {currentProducts.map((product) => (
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
            <button
              onClick={() => handleAdd(product)}
              className="w-full border-none text-center py-3 text-white cursor-pointer rounded-full bg-fuchsia-600"
            >
              Add To PC Builder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`https://herotech-ekholil.vercel.app/api/products`);
  const data = await res.json();
  const uniqueCategories = new Set();

  // Iterate through the products array and add each category to the Set
  data.result.forEach((product: any) => {
    uniqueCategories.add(product.category);
  });

  // Convert the Set to an array to get all unique category names
  const uniqueCategoryNames = Array.from(uniqueCategories);
  const paths = uniqueCategoryNames.map((item) => ({
    params: { name: item },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await fetch(`https://herotech-ekholil.vercel.app/api/products`);
  const data = await res.json();

  return {
    props: {
      products: data.result,
    },
  };
};
