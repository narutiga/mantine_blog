import { NextPage } from "next";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Blog } from "src/pages_component/index";
import dayjs from "dayjs";

export type ArticleProps = Blog & MicroCMSContentId & MicroCMSDate;

/** @package */
export const Article: NextPage<ArticleProps> = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl mb-16">{props.title}</h1>
        <time dateTime={props.publishedAt}>
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </time>
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </>
  );
};
