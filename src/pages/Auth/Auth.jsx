import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { BlueBtn } from '../../ui/BlueBtn/BlueBtn';
import { GenericInput } from '../../ui/GenericInput/GenericInput';
import './Auth.css';


const Auth = () => {
  
  const {Login, user, Logout, password, error} = useContext(AuthContext)
  
	const [details, setDetails] = useState({name:'', email:'', password:''});
  console.log(details);

  // const getEmail = localStorage.getItem(emailData)
  // const getPassword = localStorage.getItem(passwordData)

	const submitHandler = (e) => {
		e.preventDefault();
    
    // if(details.email === 'jesus@mail.com' && details.password === 'jesus123') {
    //   localStorage.setItem('emailData', details.email)
    //   localStorage.setItem('password', details.password)
    // }

		Login(details);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='login__container'>
				<h2 className='login__title--label'>Login</h2>
				{(error != '') ? (<div className='login__error'>{error}</div>) : '' }
				<div className='login__data'>
					<label className='login__label' htmlFor='name'>Name*</label>
					<GenericInput
					className='login__input'
						type='text'
						name='name'
						id='name'
						onChange={(e) => setDetails({ ...details, name: e.target.value })}
						value={details.name}
						autoFocus
					/>
				</div>
				<div className='login__data'>
					<label className='login__label' htmlFor='email'>Email*</label>
					<GenericInput
					className='login__input'
						type='email'
						name='email'
						id='email'
						onChange={(e) => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</div>
				<div className='login__data'>
					<label className='login__label' htmlFor='password'>Password*</label>
					<GenericInput
					className='login__input'
						type='password'
						name='password'
						id='password'
						onChange={(e) =>
							setDetails({ ...details, password: e.target.value })
						}
						value={details.password}
					/>
				</div>
				<BlueBtn styleLog type='submit'>LOGIN</BlueBtn>
			</div>
      <p className='p'>{user.name}</p>
		</form>
	);
}

export default Auth;
