import type { CustomNextPage, GetStaticProps } from "next";
import { client } from "src/lib/client";
import { Layout } from "src/pages_layout";
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
    revalidate: 86400,
  };
};

export default IndexPage;
