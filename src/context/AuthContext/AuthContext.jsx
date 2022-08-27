import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {

  const navigate = useNavigate();

	const adminUser = {
		email: 'jesus@mail.com',
		password: 'jesus123',
	};

	const [user, setUser] = useState({ name: '', email: '' });
	const [error, setError] = useState('');

	const Login = (details) => {
		console.log(details);

		if (
			details.email === adminUser.email &&
			details.password === adminUser.password
		) {
			setUser({
				name: details.name,
				email: details.email,
			});

      navigate('/mainstage', {
        replace: true
      });

		} else if (details.email === '' || details.password === '') {
			setError(<p style={{padding: '.4rem 1.5rem', backgroundColor:'#F4821D', borderRadius: '.9rem' ,color:'#fff'}}>Please, write Email and Password</p>);
		} else {
			setError(<p style={{padding: '.4rem 1.5rem', backgroundColor:'#b00000', borderRadius: '.9rem' ,color:'#fff'}}>Wrong Email and Password</p>);
		}
	};

	const Logout = () => {
		setUser({ name: '', email: '' });
	};

	return (
		<AuthContext.Provider
			value={{ adminUser, user, setUser, error, setError, Login, Logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
