import { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import { client } from "src/lib/client";
import { ArticleLayout } from "src/pages_layout";
import { Article } from "src/pages_component/article";
import { Blog } from "src/pages_component/index";
import { ArticleProps } from "src/pages_component/article/page";

const ArticlePage: CustomNextPage<ArticleProps> = (props) => {
  return <Article {...props} />;
};

ArticlePage.getLayout = ArticleLayout;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: ctx.params.id,
  });
  return {
    props: data,
    revalidate: 86400,
  };
};

export default ArticlePage;
