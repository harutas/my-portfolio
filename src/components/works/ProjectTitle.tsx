interface Props {
  title: string | null;
}

export const ProjectTitle = ({ title }: Props) => {
  return (
    <h2 className="mb-2 text-xl font-semibold text-gray-800">
      {title && <p className="transition duration-100">{title}</p>}
    </h2>
  );
};
