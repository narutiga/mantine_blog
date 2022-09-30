import { CustomLayout } from "next";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";

/** @package */
export const ArticleLayout: CustomLayout = (page) => {
  return (
    <div className="font-mono">
      <Header />
      <main className="w-5/6 mx-auto">{page}</main>
      <Footer />
    </div>
  );
};
