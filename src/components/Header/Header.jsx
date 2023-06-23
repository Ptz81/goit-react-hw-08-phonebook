import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { dellToken } from "redux/auth/auth"
import { logOut } from "redux/auth/authSlice"

export const Header = ({ open }) => {
  const { access_token: isAuth, profile } = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleLogOut = () => {
		dispatch(logOut())
		dellToken()
	}
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
       {profile && <h4 className='text-white'>{profile.name}</h4>}
				<button className='btn btn-outline-success' onClick={open}>
					Open Modal
				</button>
				<button
					className='btn btn-outline-success'
					onClick={() => {
						isAuth ? handleLogOut() : navigate('/login')
					}}
				>
					{isAuth ? 'Logout' : 'Login'}
				</button>
      </div>
  </nav>
)
}
