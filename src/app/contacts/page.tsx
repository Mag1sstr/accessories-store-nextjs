import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ContactsPage from "@/components/ContactsPage/ContactsPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

function Page() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <ContactsPage />
      <Footer />
    </>
  );
}

export default Page;
