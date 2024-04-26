import React, { useState, useEffect } from 'react';



const ImageSlider = ({ url, limit, page }) => {
	const [imageData, setImageData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentSlider, setCurrentSlider] = useState(0);

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const response = await fetch(`${url}?page=${page}&limit=${limit}`);
				const data = await response.json();
				setImageData(data);
				console.log(data);
				setLoading(false);
			} catch (e) {
				setError(e.message);
				setLoading(false);
			}
		}
		fetchData();
	}, [url, limit, page]);

	const onPrevious = () => {
	currentSlider === 0 ? setCurrentSlider(imageData.length-1) : setCurrentSlider(currentSlider-1)
	}

	const onNext = () => {
		currentSlider === imageData.length-1 ? setCurrentSlider(0) : setCurrentSlider(currentSlider+1)
	}

	if (loading) return <h3>Loading...</h3>;
	if (error) return <h3>{error}</h3>;
	return (
		<><h1>Image Slider</h1><div style={{
			backgroundColor: 'lightblue',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: '10px',
		}}>

			<div onClick={onPrevious} >Prev</div>
			{imageData.map((image, index) => (
				currentSlider === index ? (
					<img
						style={{
							margin: '10px',
						}}
						key={index}
						src={image.download_url}
						alt={image.download_url}
						width={200}
						height={200} />
				) : null

			))}
			<div onClick={onNext}>Next</div>
		
		</div>
		<div style={{
				alignItems: 'center',
			}}>
				{imageData.map((_, i) => <button key={i} style={{
					backgroundColor: i === currentSlider ? 'black' : 'white',
					color: i === currentSlider ? 'white' : 'black',
					border: '1px solid black',
					margin: '5px',
				
				}}>

				</button>
				)}
			</div></>
	)
}

export default ImageSlider;