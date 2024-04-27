import React from 'react';



const useLocalStorage = (key, initialValue) => {
	// Get the value from local storage
	const storedValue = localStorage.getItem(key);
	// If the value is stored, then parse it
	// Otherwise, return the initial value
	const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
	
	// Create a state to store the value
	const [value, setValue] = React.useState(parsedValue);
	
	// Update the local storage whenever the value changes
	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);
	
	return [value, setValue];

}
 
export default useLocalStorage;