import { NextPage } from "next";
import Link from "next/link";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Blog } from "src/pages_component/index";
import dayjs from "dayjs";

export type ArticleProps = Blog & MicroCMSContentId & MicroCMSDate;

/** @package */
export const Article: NextPage<ArticleProps> = (props) => {
  return (
    <>
      <h1 className="text-xl mb-4">{props.title}</h1>
      <time dateTime={props.publishedAt} className="text-xs">
        {dayjs(props.publishedAt).format("投稿日: YYYY年MM月DD日")}
      </time>
      <time dateTime={props.revisedAd} className="text-xs">
        {props.revisedAd
          ? dayjs(props.revisedAd).format("更新日: YYYY年MM月DD日")
          : null}
      </time>
      <p className="my-0 text-xs">{`カテゴリ: ${props.category.name}`}</p>
      <div
        className="my-6"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      <Link href="/">
        <a href="replace" className="text-right">
          記事一覧
        </a>
      </Link>
    </>
  );
};
