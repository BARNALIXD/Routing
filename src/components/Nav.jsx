
import { NavLink } from 'react-router-dom';

// children application
const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
    <NavLink to="/">
    {(e) => {
      return (
      <span 
      className={[
        e.isActive? "text-red-300" : " ",
        e.isActive? "text-bold" : " ",
      ].join(" " )}
      >
        Home
      </span>
  );
}}
    </NavLink>




//style application
    <NavLink 
    style={(e)=>{
      return {
        color: e.isActive ? 'tomato' : '',
        fontWeight: e.isActive ? 'bold' : '',
      };
      }} 
     to="/user">
     User
      </NavLink>



//className application
    <NavLink 
     className={(e)=>{
      return [
        e.isActive ? "text-red-300" : " ",
        e.isActive ? "text-bold" : " ",
      ].join("");
     }}
    to="/about">
    About
    </NavLink>




  </nav>
  )
}

export default NavLink