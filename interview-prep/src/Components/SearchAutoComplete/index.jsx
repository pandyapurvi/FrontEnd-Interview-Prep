import React, { useState, useEffect } from 'react';


const SearchAutoComplete = () => {
	const [loading, setLoading] = useState(false);
	const [userInput, setUserInput] = useState('');
	const [user, setUser] = useState([]);
	const [showData, setShowData] = useState(false);
	const [filteredUserInput, setFilteredUser] = useState([]);

	const handleUserInput = (e) => {
		setUserInput(e.target.value.toLowerCase());
		if (e.target.value.length > 1) {
			const filteredUser = user.filter((userItem) => userItem.toLowerCase().indexOf(e.target.value) > -1 );
			setFilteredUser(filteredUser);
			setShowData(true);
		} else {
			setShowData(false);
		}
	}

	const fetchUser = async () => {
		try {
			setLoading(true);
			const res = await fetch('https://dummyjson.com/users');
			const data = await res.json();
			if (data && data.users && data.users.length) {
				setUser(data.users.map((userItem) => userItem.firstName));
				setLoading(false)
			}
		} catch (error) {
			setLoading(false);
			console.log('Error fetching data', error);
		}
	}

	useEffect(() => {
		fetchUser()
	}, []);

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			flexDirection: 'column',  
			marginTop: '150px'
		
		}}>
			<h3>Search Auto Complete</h3>
			<input
				type="text"
				placeholder="Search"
				value={userInput}
				onChange={handleUserInput}
			/>
			<div>
				{loading && <p>Loading...</p>}
				{showData && filteredUserInput.length > 0 && filteredUserInput.map((userItem, index) => (
					<p key={index}>{userItem}</p>
				))}
			</div>
		</div>
	);
};

export default SearchAutoComplete;