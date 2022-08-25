import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import Auth from '../Auth';
import { useNavigate } from 'react-router-dom';



const Profile = () => {

  const navigate = useNavigate();

  const {user, setUser, Logout, Login, error} = useContext(AuthContext)

  const toMainstage = () => {
    setUser({name:'', email:''})
    // navigate('/mainstage', {
    //   replace: true
    // });
  }

	return (
		<>
			{user.email !== '' ? (
				<div className='welcome'>
					<h2>
						<i className='bx bx-user-circle'></i>
						<span>{user.name}</span>
					</h2>
					<button onClick={toMainstage}>Logout</button>
				</div>
			) : (
				<Auth Login={Login} error={error} />
			)}
		</>
	);
}

export default Profile;
