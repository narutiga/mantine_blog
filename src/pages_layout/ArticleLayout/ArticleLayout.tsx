import { CustomLayout } from "next";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";

/** @package */
export const ArticleLayout: CustomLayout = (page) => {
  return (
    <div className="items-center justify-center font-mono">
      <Header />
      <main className="">{page}</main>
      <Footer />
    </div>
  );
};
