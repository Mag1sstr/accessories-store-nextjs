import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FavoritesPage from "@/components/FavoritesPage/FavoritesPage";
import Header from "@/components/Header/Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Избранное",
  description: "An online store with products of various categories",
};
function Page() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <FavoritesPage />
    </>
  );
}

export default Page;
