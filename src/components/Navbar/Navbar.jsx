import React, { useContext } from 'react';
import './Navbar.css';
import logoNav from '../../assets/images/logo-nav.svg';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Navbar = () => {
	const { user, setUser, Logout, Login } = useContext(AuthContext);

	const btnLogout = <Link to='/mainstage'> <button onClick={() => setUser({name:'', email:''})}>Logout</button> </Link>
	const btnLogin = <Link to='/login'> <button>Login</button> </Link>

	return (
		<>
			<nav className='nav__container'>
				<Link to='/mainstage'>
					<img src={logoNav} alt='navbar logo' className='nav__logo' />
				</Link>
				<div className='nav__menu--container'>
					<Link className='nav__menu--link' to='/faq'>
						FAQ
					</Link>
					<Link className='nav__menu--link' to='/contact'>
						{user.name !== '' ? <p><i className='bx bx-user-circle'></i>{user.name}</p> : <p> Quest </p>}
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
