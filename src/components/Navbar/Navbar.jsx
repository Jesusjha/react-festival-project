import React from 'react';
import './Navbar.css';
import logoNav from '../../assets/images/logo-nav.svg';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
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
						Contact Us
					</Link>
					<Link className='nav__menu--link' to='/login'>
						Login
					</Link>
				</div>
			</nav>
			<section>
				<Outlet />
			</section>
		</>
	);
};

export default Navbar;
