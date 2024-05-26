import React, { useEffect, useState } from 'react';
import User from './User';


const GithubProfileFounder = () => {
	const [username, setUsername] = useState('pandyapurvi');
	const [userData, setUserData] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchUserData = async () => {
		 setLoading(true);
		 const res = await fetch(`https://api.github.com/users/${username}`);
		 const data = await res.json();
		 if (data) {
			 setUserData(data)
			 setLoading(false);
	
		 }
	}
	
	useEffect(() => { 
		fetchUserData()
	}, [username]);


	const handleSubmit = (e) => {
		e.preventDefault();
		fetchUserData()
	};
	if(loading) <h3>Loading....</h3>

	return <div style={{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: '1px solid black',
		margin: '20px',
	
	}}>
		<h2>Github Profile</h2>
		<div>
			<input
				type="text"
				input=""
				value={username}
				onChange={(e) => setUsername(e.target.username)} />
			<button onClick={handleSubmit}>Search</button>
			<User user={ userData} />
		</div>
	</div>
};

export default GithubProfileFounder;