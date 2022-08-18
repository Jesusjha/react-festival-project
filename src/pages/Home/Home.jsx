import React from 'react';
import './Home.css';
import logoHome from '../../assets/images/logo-bg.svg';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home__container'>
			<img src={ logoHome } alt='home logo' className='home__logo' />
			<div className='home__btn--link'>
				<Link to='/mainstage'>
					<button className='home__btn' type='button'>
						START DREAMING
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
