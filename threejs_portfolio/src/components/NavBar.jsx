import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="header">
        <NavLink to='/' className='nav-link text-white'>
            <p>Home</p>
        </NavLink>

        <nav className='flex gap-4'>
            <NavLink to='/about' className={({isActive}) => {
                return isActive ? 'text-blue-500' : 'text-white'
            }
            }>
                <button className='custom-btn btn-7'><span>About</span></button>
            
            </NavLink>
            <NavLink to='/projects'  className={({isActive}) => {
                return isActive ? 'text-blue-500' : 'text-white'
            }
            }>
                <button className='custom-btn btn-7'><span>Projects</span></button>
            </NavLink>
            <NavLink to='/contact'  className={({isActive}) => {
                return isActive ? 'text-blue-500' : 'text-white'
            }
            }>
                <button className='custom-btn btn-7'><span>Contact</span></button>
            </NavLink>

        </nav>

    </header>
  )
}

export default NavBar