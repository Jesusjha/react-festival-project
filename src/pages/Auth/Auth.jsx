import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import './Auth.css';

const Auth = () => {
  
  const {Login, user, Logout, password} = useContext(AuthContext)
  
	const [details, setDetails] = useState({name:'', email:'', password:''});
  console.log(details);

	const submitHandler = (e) => {
		e.preventDefault();
  
		Login(details);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='form-inner'>
				<h2>Login</h2>
				{/* ERROR! */}
				<div className='form-group'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						onChange={(e) => setDetails({ ...details, name: e.target.value })}
						value={details.name}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						onChange={(e) => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={(e) =>
							setDetails({ ...details, password: e.target.value })
						}
						value={details.password}
					/>
				</div>
				<button type='submit'>LOGIN</button>
			</div>
      <p className='p'>{user.name}</p>
		</form>
	);
}

export default Auth;
