import { motion } from "framer-motion";
import { MenuItem } from "@/components/header/menuItem";
import { NavLinkPath } from "@/app/types";
import "./../../app/globals.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface Props {
  navLinkPath: NavLinkPath[];
  pathname: string;
  toggle: () => void;
}

export const Navigation = ({ navLinkPath, pathname, toggle }: Props) => (
  <motion.ul className="fixed" variants={variants}>
    {navLinkPath.map((path) => (
      <MenuItem key={path.linkPath} navLinkPath={path} pathname={pathname} toggle={toggle} />
    ))}
  </motion.ul>
);
