import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SingleProductPage from "@/components/SingleProductPage/SingleProductPage";
import { IProducts } from "@/types/interfaces";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store",
  });
  const product: IProducts = await res.json();

  return {
    title: product.title ?? "Страница продукта",
    openGraph: {
      title: product.title ?? "Страница продукта",
    },
  };
}

export default async function SingleProduct({ params }: PageProps) {
  const { id } = await params;
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    {
      cache: "no-store",
    },
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
