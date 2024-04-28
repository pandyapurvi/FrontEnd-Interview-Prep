import React, { useEffect, useState } from 'react';
import './styles.css';

const ScrollBar = ({ url }) => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const handleScollBar = () => {
		// find out how far the user has scrolled
		const howFarScrolled = document.documentElement.scrollTop || document.body.scrollTop;
		// find out the total height of the document
		const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		setScrollPercentage(howFarScrolled / totalHeight * 100);
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScollBar)
		// make the scoll to its initial position
		return () => {
			window.addEventListener('scroll', () => {})
		}

	}, [])

	return <div >
		<div  className='scroll-bar'>
			<div style={{ width: `${scrollPercentage}%` }} className='scroll-bar-thumb'></div>
		</div>
	</div>
}

export default ScrollBar;