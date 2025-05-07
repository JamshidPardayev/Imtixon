import Image from "next/image";
import Header from "./Header/page";
import Categories from "./Categories/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}
