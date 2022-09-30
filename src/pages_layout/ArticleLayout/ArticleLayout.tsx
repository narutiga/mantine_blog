import { CustomLayout } from "next";
import { Footer } from "src/component/Footer";
import { HeaderMenu } from "src/component/Header";

/** @package */
export const ArticleLayout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen flex-col font-mono">
      <HeaderMenu />
      <main className="flex flex-1 flex-col w-5/6 pt-20 mx-auto">{page}</main>
      <Footer />
    </div>
  );
};
