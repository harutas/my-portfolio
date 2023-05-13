interface Props {
  description: string | null;
}

export const ProjectDescription = ({ description }: Props) => {
  return <>{description && <p className="mt-2 mb-8 text-gray-500">{description}</p>}</>;
};
