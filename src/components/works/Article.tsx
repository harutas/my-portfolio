import Image from "next/image";
import type { Work } from "@/app/types";
import { NextPage } from "next";

interface Props {
  work: Work;
}

const Article: NextPage<Props> = (props) => {
  const { work } = props;
  return (
    // article - start
    <div key={work.id} className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <div className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
        <Image
          src={work.imageURL}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
          priority={true}
          alt={work.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          <p className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{work.title}</p>
        </h2>

        <p className="mb-8 text-gray-500">{work.content}</p>

        <div className="mt-auto flex items-end justify-between">
          {work.stackBatches.map((stack) => (
            <span key={stack} className="rounded border px-2 py-1 text-sm text-gray-500">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;