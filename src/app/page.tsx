import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import Slider from "@/components/Slider/Slider";
import Subscription from "@/components/Subscription/Subscription";

export default async function Home() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });
  const products = await response.json();

  return (
    <>
      <Header />
      <Slider />
      <Products products={products} />
      <Subscription />
      <Footer />
    </>
  );
}
