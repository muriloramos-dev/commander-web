"use client"
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx';
import Home from "../../../../public/home.png"
import Dashboard from "../../../../public/dashboard.png"
import Task from "../../../../public/task.png"
import Image from 'next/image';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <aside onMouseOver={() => setCollapsed(true)} onMouseLeave={() => setCollapsed(false)} className={clsx("text-black w-full border-r-gray-600 border-r-1", collapsed ? "md:w-full" : "md:w-fit")}>
      <div className="p-4 flex items-center justify-between md:hidden border-b">
        <span className="text-lg font-bold">Menu</span>
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      <nav className="hidden md:block py-4 pr-2">
        <ul className="gap-y-3 flex flex-col justify-center items-center">
          <div className='border-b border-b-gray-700 px-4 h-16'>
            <span
              className={clsx(
                'text-lg font-bold py-2 px-4 rounded-lg bg-primary text-dark',
                !collapsed ? 'text-center' : ''
              )}
            >
              {!collapsed ? 'U' : 'Ulbane'}
            </span>
          </div>
          <div className='flex flex-col gap-y-3 mt-4 justify-stretch items-start'>
            <li className={clsx("block text-light hover:text-dark hover:bg-secondary p-2 hover:rounded-lg")}>
              <Link href="/" className='flex items-center justify-center gap-4'>
                <Image src={Home} alt='Home' />
                {collapsed && (<h4 className='font-bold'>Home</h4>)}
              </Link>
            </li>
            <li className={clsx("block text-light hover:text-dark hover:bg-secondary px-2 py-2 hover:rounded-lg", !collapsed && "w-fit")}>
              <Link href="/dashboard" className='flex items-center justify-center gap-4'>
                <Image src={Dashboard} alt='Dashboard' />
                {collapsed && (<h4 className='font-bold'>Dashboard</h4>)}
              </Link>
            </li>
            <li className={clsx("block text-light hover:text-dark hover:bg-secondary px-2 py-2 hover:rounded-lg", !collapsed && "w-fit")}>
              <Link href="/task" className='flex items-center justify-center gap-4'>
                <Image src={Task} alt='task' />
                {collapsed && (<h4 className='font-bold'>Task</h4>)}
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      {menuOpen && (
        <nav className="md:hidden p-4 border-t">
          <ul className="space-y-6">
            <li><Link href="/" className="block text-primary">🏠 Home</Link></li>
            <li><Link href="/sobre" className="block text-primary">ℹ️ Sobre</Link></li>
            <li><Link href="/contato" className="block text-primary">📞 Contato</Link></li>
          </ul>
        </nav>
      )}
    </aside>
  )
}
