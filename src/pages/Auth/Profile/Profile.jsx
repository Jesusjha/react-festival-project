import React, { useContext } from 'react';
import Auth from '../Auth';

import { AuthContext } from '../../../context/AuthContext/AuthContext';

const Profile = () => {

  const {user, setUser, Login, error} = useContext(AuthContext)

  const toMainstage = () => {
    setUser({name:'', email:''})
  }

	return (
		<>
			{user.email !== '' ? (
				<div className='welcome'>
					<h2>
						<span>{user.name}</span>
					</h2>
					{/* <button onClick={toMainstage}>Logout</button> */}
				</div>
			) : (
				<Auth Login={Login} error={error} />
			)}
		</>
	);
}

export default Profile;
