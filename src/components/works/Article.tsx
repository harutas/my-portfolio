import Image from "next/image";
import type { Work } from "@/app/types";
import { NextPage } from "next";

interface Props {
  work: Work;
}

const Article: NextPage<Props> = ({ work }: Props) => {
  return (
    // article - start
    <div key={work.id} className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <div className="group h-48 overflow-hidden bg-gray-100 md:h-64">
        {work.eyecatch?.url ? (
          <Image
            src={work.eyecatch.url}
            width={work.eyecatch.width}
            height={work.eyecatch.height}
            priority={true}
            alt=""
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"></div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          <p className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{work.title}</p>
        </h2>

        <p className="mb-8 text-gray-500">{work.description}</p>

        <div className="mt-auto flex items-end justify-start">
          {work.tags.map((tag) => (
            <span key={tag.id} className="rounded border px-2 py-1 text-sm text-gray-500">
              {tag.tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
