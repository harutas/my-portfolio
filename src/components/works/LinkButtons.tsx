import Image from "next/image";
import githubIcon from "public/github-mark-white.svg";
import webIcon from "public/world-wide-web.png";

interface Props {
  websiteURL: string | null;
  githubURL: string | null;
}

export const LinkButtons = ({ websiteURL, githubURL }: Props) => {
  const buttons = [
    {
      icon: webIcon,
      url: websiteURL || "",
      buttonText: "Visit",
      buttonStyle: "bg-teal-200 hover:bg-teal-100 tracking-wider",
      openWebsite: () => window.open(websiteURL || ""),
    },
    {
      icon: githubIcon,
      url: githubURL,
      buttonText: "Github",
      buttonStyle: "bg-gray-800 hover:bg-gray-700 text-white",
      openWebsite: () => window.open(githubURL || ""),
    },
  ];
  return (
    <div className="flex justify-around">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className={`flex justify-around items-center text-lg w-32 font-semibold rounded py-2 px-4 ${button.buttonStyle}`}
            onClick={button.openWebsite}
          >
            <Image src={button.icon} width={28} alt="" />
            <span className="ml-2">{button.buttonText}</span>
          </button>
        );
      })}
    </div>
  );
};
