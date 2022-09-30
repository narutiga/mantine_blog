import { CustomLayout } from "next";

/** @package */
export const ArticleLayout: CustomLayout = (page) => {
  return (
    <div className="font-mono">
      <main className="w-5/6 mx-auto">{page}</main>
    </div>
  );
};
