import { CustomLayout } from "next";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";

/** @package */
export const Layout: CustomLayout = (page) => {
  return (
    <div className="items-center justify-center font-mono">
      <Header />
      <main className="pt-20 items-center">{page}</main>
      <Footer />
    </div>
  );
};
