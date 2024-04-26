
import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = ({ numberOfStars }) => { 
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)

	const handleClick = (i) => { 
		setRating(i)
	}
	return <div style={{
		 height: '100vh',
	 }}>
		 <h1>Star Rating</h1>
		 {[...Array(numberOfStars)].map((_, i) => {
			 return <FaStar
				 key={i}
				 onClick={() => handleClick(i + 1)} // i + 1 because i starts at 0
				 onMouseMove={() => setHover(i + 1)}
				//  onMouseLeave={() => setHover(i+1)} //
				 style={{ color: i + 1 <= (hover || rating) ? 'yellow' : 'gray' }}
				 size={50}
			 />
			 
			
	

			 
		 }
		 )
		 }
</div>
 }

 export default StarRating;