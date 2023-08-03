import Banner from "@/components/Banner";
import Featured from "@/components/Featured";

export default function Home({ products }: any) {
  return (
    <main>
      <Banner />
      <Featured products={products.result} />
    </main>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
