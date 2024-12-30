import { NavLink, Outlet} from "react-router-dom";
import style from "./style";

const { header, navbar, listItem, navLink } = style();

const Root = () => {
  return (
    <>
    <header className='flex justify-center items-center p-4'>
      <nav className='flex gap-4 justify-between'>
        <li className='list-none'>
          <NavLink className='text-2xl underline' to='/'>
            Home
          </NavLink>
        </li>
        <li className={listItem()}>
          <NavLink className='text-2xl underline' to='About'>
            About
          </NavLink>
        </li>
        <li className={listItem()}>
          <NavLink className='text-2xl underline' to='Contact'>
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