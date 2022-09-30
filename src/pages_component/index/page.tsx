import type { NextPage } from "next";
import Head from "next/head";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ArticleCard } from "src/component/ArticleCard";

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAd: string;
  title: string;
  content: string;
  eyecatch: { url: string; height: number; width: number };
  category: {
    createdAt: string;
    id: string;
    name: string;
    publishedAt: string;
    revisedAt: string;
    updateAt: string;
  };
};

export type Props = MicroCMSListResponse<Blog>;

export const Index: NextPage<Props> = (props) => {
  const articleCards = props.contents.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.eyecatch.url,
    date: item.publishedAt,
    category: item.category.name,
  }));

  return (
    <>
      <Head>
        <title>Mantine blog</title>
      </Head>
      <p className="pr-10 text-right">{`記事の総数：${props.totalCount}件`}</p>
      <ArticleCard articleCards={articleCards} />
    </>
  );
};
