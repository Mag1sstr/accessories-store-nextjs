import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SingleProductPage from "@/components/SingleProductPage/SingleProductPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function SingleProduct({ params }: PageProps) {
  const { id } = params;
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    {
      cache: "no-store",
    }
  );

  const product = await response.json();

  return (
    <>
      <Header />
      <Breadcrumbs />
      <SingleProductPage {...product} />
      <Footer />
    </>
  );
}
