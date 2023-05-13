import { Tag } from "@/app/types";

interface Props {
  tags: Tag[] | null;
}

export const Tags = ({ tags }: Props) => {
  // 表示するタグ数を制限
  const limit = 4;
  const filteredTags = tags?.slice(0, limit);
  return (
    <div className="flex items-end justify-start flex-wrap">
      {filteredTags &&
        filteredTags.map((tag) => (
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
