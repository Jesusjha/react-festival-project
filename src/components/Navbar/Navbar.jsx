import React, { useContext } from 'react';

import logoNav from '../../assets/images/logo-nav.svg';
import './Navbar.css';

import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
	const { user, setUser } = useContext(AuthContext);

	/* Variable that store a button that has a link to the login page. */
	const btnLogin = <Link to='/login'> <button className='navbar__login--btn'>Login</button> </Link>

/* Variable that store a button that has a link to the mainstage page. It also has
an onClick event that sets the user to an empty object. */
	const btnLogout = <Link to='/mainstage'> <button className='navbar__logout--btn' onClick={() => setUser({name:'', email:''})}>Logout</button> </Link>

	return (
		<>
			<nav className='nav__container'>
				<Link to='/mainstage'>
					<img src={logoNav} alt='navbar logo' className='nav__logo' />
				</Link>
				<div className='nav__menu--container'>
					<Link className='nav__menu--user' to='/contact'>
						{/* If the user is logged in, the user name will be showed */}
						{user.name !== '' ? <p className='nav__user--name'>{user.name}</p> :''}
					</Link>
						{/* Conditional rendering to show loging/logout button depending if the user is logged */}
						{ user.name !== '' ? btnLogout : btnLogin }
				</div>
			</nav>
			<section>
				<Outlet />
			</section>
		</>
	);
};

export default Navbar;
