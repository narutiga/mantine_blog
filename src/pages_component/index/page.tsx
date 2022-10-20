import type { NextPage } from "next";
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
  return (
    <>
      <p>未経験アラフォーがフロントエンジニアを目指すブログです</p>
      <p className="w-full pr-10 text-sm text-right">{`記事の総数：${props.totalCount}件`}</p>
      <ArticleCard articles={props.contents} />
    </>
  );
};
