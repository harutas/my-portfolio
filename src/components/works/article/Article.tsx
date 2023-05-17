import { NextPage } from "next";
import { Eyecatch } from "@/components/works/article/Eyecatch";
import { ProjectTitle } from "@/components/works/article/ProjectTitle";
import { Tags } from "@/components/works/article/Tags";
import { ProjectDescription } from "@/components/works/article/ProjectDescription";
import type { Work } from "@/libs/client";

interface Props {
  work: Work;
}

const Article: NextPage<Props> = ({ work }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-lg hover:scale-105 duration-300">
      <Eyecatch eyecatch={work.eyecatch} />
      <div className="flex flex-1 flex-col p-3 border-gray-200 border-t-2">
        <ProjectTitle title={work.title} />
        <Tags tags={work.tags} />
        <ProjectDescription description={work.description} />
      </div>
    </div>
  );
};

export default Article;
