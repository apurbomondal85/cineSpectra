
import { Link } from 'react-router-dom'
import './NavBar.css'
import { FaBars } from 'react-icons/fa'

function NavBar() {
  return (
    <div className='py-3 px-lg-5 w-100 navbar bg-white'>
      <div className="w-100 d-flex align-items-center justify-content-between">
        <h1 className="fs-3 fw-bold">CineSpectra</h1>
        <FaBars className='d-block d-lg-none'></FaBars>
        <ul className='nav-menu d-none d-lg-flex align-items-center gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link>My Bookings</Link></li>
            <li><Link>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
