import Link from "next/link"
const link = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* LOGO */}
      <div className="">
        <Link
          href="/"
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className="text-white mr-1">Deepak</span>
          <spam className="w-12 h-8 rounded bg-white text-black flex items-center justify-center ">Sinha</spam>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="">
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
          {link.map(link => (
            <Link href={link.url} key={link.title}>{link.title}</Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Navbar 
