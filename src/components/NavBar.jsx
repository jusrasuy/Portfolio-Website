import { Link } from "react-router-dom"
import '../components/NavBar.css'


const NavBar = () => {
  return (
    <>
   <div className="container">
   <div className="logo"> <h3>Raas.com</h3> </div>
    <ul className="Nav">
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/services"><li>Sgn in</li></Link>
    </ul>
   </div>


   </>
  )
}

export default NavBar