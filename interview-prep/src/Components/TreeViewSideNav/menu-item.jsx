import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './styles.css';

const MenuItem = ({ item }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	
	// This function will toggle the open or close on button
  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='menu-items'>{item.label}
        {item.children && item.children.length > 0 && (
          <button onClick={handleToggleClick} style={{
          margin: '10px',
        }}>{isOpen ?
          <FaMinus color='black' size="20"/> : <FaPlus color='black' size="20"/>}</button>
      )}
        </div>
			
			{/* // If there are children and isOpen is true, then render the children */}
			{/* So that way we are recursively using the MenuItem component to render the children */}
      {item.children && item.children.length > 0 && isOpen && (
        <ul>
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuItem;
