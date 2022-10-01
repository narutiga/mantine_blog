import { NextPage } from "next";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Blog } from "src/pages_component/index";
import dayjs from "dayjs";

export type ArticleProps = Blog & MicroCMSContentId & MicroCMSDate;

/** @package */
export const Article: NextPage<ArticleProps> = (props) => {
  return (
    <>
      <h1 className="text-center text-xl mb-4">{props.title}</h1>
      <time dateTime={props.publishedAt} className="text-right">
        {dayjs(props.publishedAt).format("投稿日：YYYY年MM月DD日")}
      </time>
      <time dateTime={props.revisedAd} className="text-right">
        {props.revisedAd
          ? dayjs(props.revisedAd).format("更新日：YYYY年MM月DD日")
          : null}
      </time>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </>
  );
};
