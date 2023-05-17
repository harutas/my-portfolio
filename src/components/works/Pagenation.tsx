import Link from "next/link";
import { WORKS_PER_PAGE } from "@/app/config";

export const Pagenation = ({ totalCount }: { totalCount: number }) => {
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex justify-center my-6">
      <li>
        <Link
          href="/works/page/1"
          className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </Link>
      </li>
      {range(1, Math.ceil(totalCount / WORKS_PER_PAGE)).map((number, index) => (
        <li
          key={index}
          className="flex justify-center items-center w-10 h-10 rounded-full mx-2 first:ml-0 last:mr-0 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100"
        >
          <Link href={`/works/page/${number}`}>{number}</Link>
        </li>
      ))}
      <li>
        <Link
          href={`/works/page/${Math.ceil(totalCount / WORKS_PER_PAGE)}`}
          className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </Link>
      </li>
    </ul>
  );
};
