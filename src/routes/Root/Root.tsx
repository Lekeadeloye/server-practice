import { NavLink, Outlet} from "react-router-dom";
// import style from "./style";

// Below is how to use slots with tailwind variant is classes become too long
// const { header, navbar, listItem, navLink } = style();

const Root = () => {
  return (
    <>
    <header className='flex items-center p-4'>
      <nav className='flex space-x-4 justify-around w-full text-2xl underline list-none'>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='About'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='Contact'>
            Contact
          </NavLink>
        </li>
      </nav>
    </header>
    <div className="w-full">
      <Outlet/>
    </div>
    </>
  )
}

export default Root