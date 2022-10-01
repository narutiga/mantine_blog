import { NextPage } from "next";
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
      <p className="text-xs">{`カテゴリ: ${props.category.name}`}</p>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </>
  );
};
