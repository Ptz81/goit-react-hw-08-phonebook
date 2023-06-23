import { NavLink, useNavigate } from "react-router-dom"

export const Header = ({ open }) => {
  const navigate = useNavigate()
  return (
    <nav className="nav-bar">
      <div className="container">
        <span className="logo">
          Logo
        </span>
        <div className="navigation">
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/options'>
            Options
          </NavLink>
        </div>
        <button className="btn" onClick={open}>Open Modal</button>
        <button className="btn" onClick={()=>navigate('/login')}>Log In</button>
      </div>
  </nav>
)
}
