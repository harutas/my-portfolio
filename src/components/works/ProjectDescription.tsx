interface Props {
  description: string | null;
}

export const ProjectDescription = ({ description }: Props) => {
  return <>{<p className="grow my-2 text-gray-500">{description || ""}</p>}</>;
};
