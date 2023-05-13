import Image from "next/image";

interface Props {
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
}

export const Eyecatch = ({ eyecatch }: Props) => {
  return (
    <div className="group h-48 overflow-hidden bg-gray-100 md:h-64">
      {eyecatch && eyecatch.url ? (
        <Image
          src={eyecatch.url}
          width={eyecatch.width}
          height={eyecatch.height}
          priority={true}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <div className="h-full w-full object-cover object-center"></div>
      )}
    </div>
  );
};
