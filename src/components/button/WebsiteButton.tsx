import Image from "next/image";
import webIcon from "public/world-wide-web.png";

interface Props {
  websiteURL: string | null;
}

const WebsiteButton = ({ websiteURL }: Props) => {
  return (
    <a
      href={`${websiteURL}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-around items-center text-xl w-28 font-semibold rounded py-2 px-4 bg-teal-200 hover:bg-teal-100"
    >
      <Image src={webIcon} width={28} alt="" />
      <span className="ml-2">Visit</span>
    </a>
  );
};

export default WebsiteButton;
