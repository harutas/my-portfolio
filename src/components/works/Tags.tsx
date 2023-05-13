import { Tag } from "@/app/types";

interface Props {
  tags: Tag[] | null;
}

export const Tags = ({ tags }: Props) => {
  return (
    <div className="mt-auto flex items-end justify-start">
      {tags &&
        tags.map((tag) => (
          <span
            key={tag.id}
            className="text-sm font-semibold inline-block py-1 px-2 rounded-lg text-sky-600 bg-sky-200 first:ml-0 last:mr-0  mr-1"
          >
            {tag.tag}
          </span>
        ))}
    </div>
  );
};
