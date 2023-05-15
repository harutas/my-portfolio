import Image from "next/image";
import githubIcon from "public/github-mark-white.svg";

interface Props {
  githubURL: string | null;
}

const GithubButton = ({ githubURL }: Props) => {
  return (
    <a
      href={`${githubURL}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-around items-center text-xl w-28 font-semibold rounded py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white"
    >
      <Image src={githubIcon} width={28} alt="" />
      <span className="ml-2">Github</span>
    </a>
  );
};

export default GithubButton;
