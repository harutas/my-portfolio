interface Props {
  title: string | null;
}

export const ProjectTitle = ({ title }: Props) => {
  return <>{title && <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>}</>;
};
