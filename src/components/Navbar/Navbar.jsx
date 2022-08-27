import React, { useContext } from 'react';
import './Navbar.css';
import logoNav from '../../assets/images/logo-nav.svg';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Navbar = () => {
	const { user, setUser, Logout, Login } = useContext(AuthContext);

	const btnLogin = <Link to='/login'> <button className='navbar__login--btn'>Login</button> </Link>
	const btnLogout = <Link to='/mainstage'> <button className='navbar__logout--btn' onClick={() => setUser({name:'', email:''})}>Logout</button> </Link>

	return (
		<>
			<nav className='nav__container'>
				<Link to='/mainstage'>
					<img src={logoNav} alt='navbar logo' className='nav__logo' />
				</Link>
				<div className='nav__menu--container'>
					{/* <Link className='nav__menu--link' to='/faq'>
						FAQ
					</Link> */}
					<Link className='nav__menu--user' to='/contact'>
						{user.name !== '' ? <p><i className='bx bxs-user-circle navbar__user--icon'></i>{user.name}</p> :''}
					</Link>
					{/* <Link className='nav__menu--link' to='/login'> */}
						{ user.name !== '' ? btnLogout : btnLogin }
					{/* </Link> */}
				</div>
			</nav>
			<section>
				<Outlet />
			</section>
		</>
	);
};

export default Navbar;
