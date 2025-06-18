import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type SidebarItemProps = {
  name: string;
  collapsed: boolean;
  link: string;
  href: string;
};

export function SideBarItem({ name, collapsed, link, href }: SidebarItemProps) {
  return (
    <li className={clsx("block w-full text-light hover:text-dark hover:bg-secondary p-2 hover:rounded-lg cursor-pointer")}>
      <Link href={link} className='w-full flex items-center gap-4'>
        <Image src={href} alt={name} width={24} height={24} />
        <AnimatePresence>
          {collapsed && (
            <motion.h4
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="font-bold whitespace-nowrap"
            >
              {name}
            </motion.h4>
          )}
        </AnimatePresence>
      </Link>
    </li>
  )
}