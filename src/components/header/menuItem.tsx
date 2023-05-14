import Link from "next/link";
import { NavLinkPath } from "@/app/types";
import { motion } from "framer-motion";
import "./../../app/globals.css";

interface Props {
  navLinkPath: NavLinkPath;
  pathname: string;
  toggle: () => void;
}

export const MenuItem = ({ navLinkPath, pathname, toggle }: Props) => {
  return (
    <Link href={navLinkPath.linkPath}>
      <motion.li
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        }}
        exit={{
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        }}
        whileHover={{
          scale: 1.1,
          borderBottom: "1px solid gray",
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.95 }}
        className={`text-2xl flex justify-center ${navLinkPath.linkPath === pathname ? "text-indigo-700" : ""}`}
        onClick={toggle}
      >
        {navLinkPath.navText}
      </motion.li>
    </Link>
  );
};
