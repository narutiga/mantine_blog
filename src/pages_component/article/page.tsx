import { NextPage } from "next";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Blog } from "src/pages_component/index";

export type ArticleProps = Blog & MicroCMSContentId & MicroCMSDate;

/** @package */
export const Article: NextPage<ArticleProps> = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <time>{props.publishedAt}</time>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </>
  );
};
