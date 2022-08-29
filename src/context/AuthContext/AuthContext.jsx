import React, { createContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {

	const [user, setUser] = useState({ name: '', email: '' });
	const [error, setError] = useState('');

  const navigate = useNavigate();

	const adminUser = {
		email: 'jesus@mail.com',
		password: 'jesus123',
	};

	const Login = ({email, password, name}) => {

		if (
			email === adminUser.email &&
			password === adminUser.password
		) {
			setUser({
				name: name,
				email: email,
			});

      navigate('/mainstage', {
        replace: true
      });

			/* Checking if the email and password are empty and it will set the warning message. 
			But if the wrong email or password, it will set the error message. */
		} else if (email === '' || password === '') {
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
