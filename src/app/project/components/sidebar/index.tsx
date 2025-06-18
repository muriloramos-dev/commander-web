"use client"
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx';
import Image from 'next/image';
import { SideBarItem } from '../sidebaritem';
import { AnimatePresence, easeInOut, motion, Variants } from 'motion/react';
import Divider from '../divider';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <motion.aside
      variants={sidebarVariants}
      initial={false}
      animate={collapsed ? 'expanded' : 'collapsed'}
      onMouseOver={() => setCollapsed(true)}
      onMouseLeave={() => setCollapsed(false)}
      className={clsx("text-black border-r-gray-600 border-r-1")}
    >

      <div className="p-4 flex items-center justify-between md:hidden border-b">
        <span className="text-lg font-bold">Menu</span>
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      <nav className={"hidden md:block py-4 pr-2"}>
        <ul className={clsx("gap-y-3 flex flex-col justify-start", collapsed ? "items-center" : "items-start")}>
          <motion.div
          initial={{ width: '3rem' }}
            animate={{ width: !collapsed ? '3rem' : '15.5rem' }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            className="border-b-2 border-b-gray-700 py-2 flex items-center px-4 justify-between rounded-lg bg-primary cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={collapsed ? 'full' : 'short'}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-bold text-dark"
              >
                {collapsed ? 'Ulbane' : 'U'}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode='wait'>
              {collapsed && (
                <motion.div
                  key="icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image alt="Change" src="/change.png" width={12} height={12} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <Divider />
          <div className='flex flex-col gap-y-3 mt-4 w-full'>
            <SideBarItem collapsed={collapsed} link='/' href='/home.png' name='Home'/>
            <SideBarItem collapsed={collapsed} link='/dashboard' href='/dashboard.png' name='Dashboard'/>
            <SideBarItem collapsed={collapsed} link='/task' href='/task.png' name='Task'/>
          </div>
        </ul>
      </nav>

      {menuOpen && (
        <nav className="md:hidden p-4 border-t">
          <ul className="space-y-6">
            <li><Link href="/" className="block text-primary">Home</Link></li>
            <li><Link href="/sobre" className="block text-primary">Sobre</Link></li>
            <li><Link href="/contato" className="block text-primary">Contato</Link></li>
          </ul>
        </nav>
      )}
    </motion.aside>
  )
}
const sidebarVariants: Variants = {
  expanded: {
    width: '16rem',
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
  collapsed: {
    width: '3.5rem',
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};