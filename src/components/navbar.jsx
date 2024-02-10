"use client"
import NavLink from "./navLink"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3" >
        {links.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}

      <div className="md:hidden lg:flex w-1/3  xl:justify-center">
        <Link
          href="/"
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className="text-white mr-1">Deepak</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Sinha</span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex justify-end gap-4 w-1/3">
        <Link href="https://github.com/sinhadeepak1115">
          <Image src="/github.png" alt='' width={24} height={24} />
        </Link>
        <Link href="https://twitter.com/sinhadeepak1115">
          <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
          </svg>      </Link>
        <Link href="">
          <Image src="/linkedin.png" alt='' width={24} height={24} />
        </Link>

        <Link href="">
          <Image src="/instagram.png" alt='' width={24} height={24} />
        </Link>

      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open &&
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white text-4xl flex flex-col items-center justify-center gap-8 ">
            {links.map(link => (
              <Link href={link.url} key={link.title}>{link.title}</Link>
            ))}
          </div>
        }
      </div>
    </div >
  )
}

export default Navbar 
