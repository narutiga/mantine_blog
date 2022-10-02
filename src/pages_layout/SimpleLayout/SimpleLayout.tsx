import { CustomLayout } from "next";
import { ColorSchemeToggle } from "src/component/ColorSchemeToggle";
import { Footer } from "src/component/Footer";

/** @package */
export const SimpleLayout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-end pr-8">
        <ColorSchemeToggle />
      </div>
      <main className="flex flex-1 flex-col w-5/6 pt-10 mx-auto items-center">
        {page}
      </main>
      <Footer />
    </div>
  );
};
