import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline, IoMoon } from "react-icons/io5";



const Header = () => {

  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-yellow-300 rounded-lg text-white">Learn</span>
        Project
      </Link>

      <form>
        <TextInput 
          type="text"
          placeholder="search..."
          rightIcon={IoSearchOutline}
          className="hidden lg:inline"
        />
      </form>
      
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoSearchOutline/>
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <IoMoon/>
        </Button>

        
        <Link to='/sing-in'>
        <Button gradientDuoTone="pinkToOrange" outline>
          Sing In
        </Button>
        </Link>

        <Navbar.Toggle/>
      </div>
      

      <Navbar.Collapse>
          <Navbar.Link active={ path === '/' } as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>

          <Navbar.Link active={ path === '/about' } as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>

          <Navbar.Link active={ path === '/projects' } as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header