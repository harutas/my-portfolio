"use client";
import type { Work } from "@/app/types";
import { NextPage } from "next";
import { Eyecatch } from "@/components/works/Eyecatch";
import { ProjectTitle } from "@/components/works/ProjectTitle";
import { Tags } from "@/components/works/Tags";
import { ProjectDescription } from "@/components/works/ProjectDescription";
import { LinkButtons } from "@/components/works/LinkButtons";

interface Props {
  work: Work;
}

const Article: NextPage<Props> = ({ work }: Props) => {
  return (
    // article - start
    <div key={work.id} className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <Eyecatch eyecatch={work.eyecatch} />
      <div className="flex flex-1 flex-col p-3">
        <ProjectTitle title={work.title} />
        <Tags tags={work.tags} />
        <ProjectDescription description={work.description} />
        <LinkButtons webSiteURL={work.webSiteURL} githubURL={work.githubURL} />
      </div>
    </div>
  );
};

export default Article;
