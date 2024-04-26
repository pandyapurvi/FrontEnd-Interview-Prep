import React from 'react';

const MenuItem = ({ item }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	
	// This function will toggle the open or close on button
  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li>
      <div>{item.label}</div>
      {item.children && item.children.length > 0 && (
        <button onClick={handleToggleClick}>{isOpen ? '-' : '+'}</button>
			)}
			
			{/* // If there are children and isOpen is true, then render the children */}
			{/* So that way we are recursively using the MenuItem component to render the children */}
      {item.children && item.children.length > 0 && isOpen && (
        <ul>
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
