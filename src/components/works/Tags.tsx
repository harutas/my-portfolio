import { Tag } from "@/app/types";
import { WorksPageGettingTagLimit } from "@/app/config";

interface Props {
  tags: Tag[] | null;
}

export const Tags = ({ tags }: Props) => {
  // 表示するタグ数を制限
  const filteredTags = tags?.slice(0, WorksPageGettingTagLimit);
  return (
    <div className="flex items-end justify-start flex-wrap">
      {filteredTags &&
        filteredTags.map((tag) => (
          <span
            key={tag.id}
            className="text-sm font-semibold inline-block py-1 px-2 rounded-lg text-sky-600 bg-sky-200 first:ml-0 last:mr-0 mr-1 mb-2"
          >
            {tag.tag}
          </span>
        ))}
    </div>
  );
};
