
import {NavLink} from 'react-router' 

// function Navbar({ favoritesCount }) {
//   return (
//     <nav style={{ display: "flex", justifyContent: "space-between", padding: 16 }}>
//       Music App
//     </nav>
//   );
// }

// export default Navbar;

function NavBar(){

  return(
    <nav>
      <NavLink to='/'>
        Home
      </NavLink>
      <hr/>
    
    </nav>
  )
}

export default NavBar