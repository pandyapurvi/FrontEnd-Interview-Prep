import React, { useState } from 'react';


const RandomColor = () => { 
	const [typeOfColor, setTypeOfColor] = useState('rgb');
	const [color, setColor] = useState(null);
	const createHexColor = () => {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
		let hexColor = '#';
		for (let i = 0; i < 6; i++){
			hexColor += hex[Math.floor(Math.random() * hex.length)]
		}
		setColor(hexColor);
	}

	const createRGBColor = () => { 
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		setColor(`rgb(${r},${g},${b})`);
	}
	return (
		<div style={{
			height: '100vh',
			width: '100vw',
			backgroundColor: color,
		
		}}>
		
			<button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
			<button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
			<button onClick={() => {
				typeOfColor === 'rgb' ? createRGBColor() : createHexColor()
				}}>Generate random colors</button>
		

			<div style={{
				marginTop: '20px',
				fontSize: '20px'
			}}>{typeOfColor}</div>
			<div>{color}</div>
		</div>
	)
}
export default RandomColor;