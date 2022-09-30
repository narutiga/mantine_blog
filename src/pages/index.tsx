import type { CustomNextPage, GetStaticProps } from "next";
import { Layout } from "src/pages_layout";
import { client } from "src/lib/client";
import { Index } from "src/pages_component/index";
import { Blog, Props } from "src/pages_component/index/page";

const IndexPage: CustomNextPage<Props> = (props) => {
  return <Index {...props} />;
};

IndexPage.getLayout = Layout;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blogs" });
  return {
    props: data,
  };
};

export default IndexPage;
