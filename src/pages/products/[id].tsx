import { Iproduct } from "@/components/Featured";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

const ProductDetails = ({ product }: { product: Iproduct }) => {
  return (
    <div className="container py-14 lg:py-28">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Image width={500} height={350} src={product.image} alt="img" />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h3>{product.title}</h3>
          <span className="p-2 rounded-full bg-green-400">
            {product.status}
          </span>
          <p>Category : {product.category}</p>
          <h4>Price : {product.Price}</h4>
          <div className="flex justify-between items-center">
            <p>Brand: {product.keyFeatures.brand}</p>
            <p>Model: {product.keyFeatures.model}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Warrenty: {product.keyFeatures.warrenty}</p>
            <p>Avg Rating: {product.averageRating}</p>
          </div>
        </div>
        <div className="col-span-12">{product.description}</div>
        <div className="col-span-12">
          <h3>Reviews : </h3>
          <div className="flex flex-col gap-2">
            <p>{product.reviews.user}</p>
            <p>{product.reviews.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`https://herotech-ekholil.vercel.app/api/products`);
  const data = await res.json();

  const paths = data.result.map((item: Iproduct) => ({
    params: { id: item._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await fetch(
    `https://herotech-ekholil.vercel.app/api/products/${params?.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
