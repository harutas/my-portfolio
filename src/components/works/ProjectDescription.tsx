interface Props {
  description: string | null;
}

export const ProjectDescription = ({ description }: Props) => {
  return <>{<p className="grow text-gray-500 mb-2">{description || ""}</p>}</>;
};
