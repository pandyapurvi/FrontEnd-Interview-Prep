import React from 'react';
import useLocalStorage from './useLocalStorage';
import './styles.css';



const LightDarkTheme = () => {
	const [theme, setTheme] = useLocalStorage('theme', 'light');
	const handleToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
}
	return (
		<div data-theme={theme} className='light-dark-mode'>
			<h1>LightDarkTheme</h1>
			<div className='light-dark-mode-container'>
				<p>Hello There!!!</p>
				<button onClick={handleToggleTheme}>Click Me!</button>
			</div>
		</div>
	)
};

export default LightDarkTheme;