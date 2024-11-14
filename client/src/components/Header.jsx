import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";


const Header = () => {

  return (
    <header className="myHeader">
      <Navbar className="px-7 py-4 md:px-12 xl:py-9 z-10 relative bg-transparent">
      <Link to="/" className="flex items-center self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white">
        <FaJsSquare className="text-yellow-400 size-7 md:size-12"/>
        Project
      </Link>

      <Navbar.Toggle className="text-yellow-400 xl:hidden"/>
      
      <Navbar.Collapse>
        <div className="flex flex-col gap-3 md:flex-row md:gap-7 items-center text-center">
        <NavLink to='/marketplace' className={({ isActive })=> `text-white rounded-lg py-1 
          ${isActive ? 'text-yellow-400' : null }`} as="div">
            Marketplace
          </NavLink>

          <NavLink to="/rankings" className={({ isActive })=> `text-white rounded-lg py-1 
            ${isActive ? 'text-yellow-400' : null }`} as="div">
              Rankings
          </NavLink>

          <NavLink to="/wallet" className={({ isActive })=> `text-white rounded-lg py-1 
            ${isActive ? 'text-yellow-400' : null }`} as="div">
              Connect a wallet
          </NavLink>

          <NavLink to='/sing-in' className="bg-yellow-400 font-bold flex items-center justify-center gap-3 py-2 px-7 md:py-5 rounded-2xl">
            <span className="hidden md:inline"><AiOutlineUser size={20}/></span>
            Sing Up
          </NavLink>
        </div>
      </Navbar.Collapse>
    </Navbar>
    </header>

  )
}

export default Header