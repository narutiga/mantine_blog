import { CustomLayout } from "next";
import { Footer } from "src/component/Footer";
import { HeaderMenu } from "src/component/Header";

/** @package */
export const Layout: CustomLayout = (page) => {
  return (
    <div className="items-center justify-center font-mono">
      <HeaderMenu />
      <main className="pt-20 items-center">{page}</main>
      <Footer />
    </div>
  );
};
