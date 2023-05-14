import Image from "next/image";
import githubIcon from "public/github-mark-white.svg";

interface Props {
  githubURL: string | null;
}

const GithubButton = ({ githubURL }: Props) => {
  const handleClickOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(githubURL || "");
  };
  return (
    <button
      className="flex justify-around items-center text-xl w-32 font-semibold rounded py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white"
      onClick={handleClickOpen}
    >
      <Image src={githubIcon} width={28} alt="" />
      <span className="ml-2">Github</span>
    </button>
  );
};

export default GithubButton;
