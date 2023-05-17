import { motion } from "framer-motion";
import { MenuItem } from "@/components/header/menuItem";
import { navLinkPaths } from "@/app/config";
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
  toggle: () => void;
}

export const Navigation = ({ toggle }: Props) => (
  <motion.ul className="nav fixed" variants={variants}>
    {navLinkPaths.map((path) => (
      <MenuItem key={path.linkPath} navLinkPath={path} toggle={toggle} />
    ))}
  </motion.ul>
);
