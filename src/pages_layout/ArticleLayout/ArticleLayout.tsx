import { CustomLayout } from "next";
import { HeaderMenu } from "src/component/Header";
import { Footer } from "src/component/Footer";

/** @package */
export const ArticleLayout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen flex-col font-mono">
      <HeaderMenu />
      <main className="flex flex-1 flex-col w-5/6 max-w-xl pt-10 mx-auto">
        {page}
      </main>
      <Footer />
    </div>
  );
};
