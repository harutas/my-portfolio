// "use client";
import { NextPage } from "next";
import Link from "next/link";
import { Eyecatch } from "@/components/works/Eyecatch";
import { ProjectTitle } from "@/components/works/ProjectTitle";
import { Tags } from "@/components/works/Tags";
import { ProjectDescription } from "@/components/works/ProjectDescription";
import { LinkButtons } from "@/components/works/LinkButtons";
import type { Work } from "@/libs/client";

interface Props {
  work: Work;
}

const Article: NextPage<Props> = ({ work }: Props) => {
  return (
    // article - start
    <Link
      href={`/works/${work.id}`}
      className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-lg hover:scale-105 duration-300"
    >
      <Eyecatch eyecatch={work.eyecatch} />
      <div className="flex flex-1 flex-col p-3 border-gray-200 border-t-2">
        <ProjectTitle title={work.title} />
        <Tags tags={work.tags} />
        <ProjectDescription description={work.description} />
        {/* <LinkButtons websiteURL={work.websiteURL} githubURL={work.githubURL} /> */}
      </div>
    </Link>
  );
};

export default Article;
