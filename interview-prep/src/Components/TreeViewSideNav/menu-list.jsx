import React from 'react';
import MenuItem from './menu-item';


const MenuList = ({items = []}) => {
	return (
		<ul>
			{items.map((item, index) => (
				<MenuItem key={index} item={item} />
			))}
		</ul>
)
}
export default MenuList;

