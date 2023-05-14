import Image from "next/image";
import webIcon from "public/world-wide-web.png";

interface Props {
  websiteURL: string | null;
}

const WebsiteButton = ({ websiteURL }: Props) => {
  const handleClickOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(websiteURL || "");
  };
  return (
    <button
      className="flex justify-around items-center text-xl w-32 font-semibold rounded py-2 px-4 bg-teal-200 hover:bg-teal-100"
      onClick={handleClickOpen}
    >
      <Image src={webIcon} width={28} alt="" />
      <span className="ml-2">Visit</span>
    </button>
  );
};

export default WebsiteButton;
