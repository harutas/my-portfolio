import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkPaths } from "@/app/config";

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden gap-12 lg:flex">
      {navLinkPaths.map((path) => {
        return (
          <Link
            key={path.linkPath}
            href={path.linkPath}
            className={`text-xl font-semibold text-gray-600 ${
              path.linkPath === pathname ? "text-indigo-700" : "hover:text-indigo-500"
            }`}
          >
            {path.navText}
          </Link>
        );
      })}
    </nav>
  );
};
