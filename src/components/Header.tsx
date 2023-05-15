"use client";
import Link from "next/link";
import { useRef } from "react";
import { useDimensions } from "@/app/hooks/useDimensions";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuToggle } from "@/components/header/MenuToggle";
import { Navigation } from "@/components/header/Navigation";
import { navLinkPath } from "@/app/config";

const sidebar = {
  open: (height = window.innerHeight) => ({
    clipPath: `circle(${height * 2 + 200}px at 276px 38px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 276px 38px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const style = {
  background: "linear-gradient(225deg, rgba(245,245,245,1) 36%, rgba(246,153,171,1) 100%)",
};

const Header = () => {
  // ハンバーガーメニュー
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const pathname = usePathname();

  const navLink = navLinkPath.map((link) => {
    return (
      <Link
        key={link.linkPath}
        href={link.linkPath}
        className={`text-xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${
          link.linkPath === pathname ? "text-indigo-700" : ""
        }`}
      >
        {link.navText}
      </Link>
    );
  });

  return (
    <div className="mx-auto max-w-screen-2xl px-8 bg-teal-200">
      <header className="flex items-center justify-between py-5 h-20">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">Haru-Devs</h1>
        </Link>
        {/* ナビゲーション */}
        <motion.nav className="hidden gap-12 lg:flex">{navLink}</motion.nav>

        {/* ハンバーガーメニュー */}
        <motion.nav
          className="relative flex items-center lg:hidden z-10"
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="bg-gray-200 fixed top-0 right-0 bottom-0 w-80" variants={sidebar} style={style} />
          <AnimatePresence>
            {isOpen && <Navigation navLinkPath={navLinkPath} pathname={pathname} toggle={() => toggleOpen()} />}
          </AnimatePresence>
          <MenuToggle toggle={toggleOpen}></MenuToggle>
        </motion.nav>
      </header>
    </div>
  );
};

export default Header;
