import Link from "next/link";
import { WORKS_PER_PAGE } from "@/app/config";

export const Pagenation = ({ totalCount }: { totalCount: number }) => {
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex">
      {range(1, Math.ceil(totalCount / WORKS_PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/works/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};
