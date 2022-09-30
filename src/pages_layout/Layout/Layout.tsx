import { CustomLayout } from "next";
import { Footer } from "src/component/Footer";
import { HeaderMenu } from "src/component/Header";

/** @package */
export const Layout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono">
      <HeaderMenu />
      <main className="flex flex-1 flex-col pt-20 items-center">{page}</main>
      <Footer />
    </div>
  );
};
