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
			setError('Please write email and password');
		} else {
			setError('Wrong email or password');
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
