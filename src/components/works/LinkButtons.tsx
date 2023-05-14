import WebsiteButton from "@/components/button/WebsiteButton";
import GithubButton from "@/components/button/GithubButton";

interface Props {
  websiteURL: string | null;
  githubURL: string | null;
}

export const LinkButtons = ({ websiteURL, githubURL }: Props) => {
  return (
    <div className="flex justify-around">
      <WebsiteButton websiteURL={websiteURL} />
      <GithubButton githubURL={githubURL} />
    </div>
  );
};
