import React from 'react';
import sideMenu from './data'
import MenuList from './menu-list';
import './styles.css';


const TreeViewSideNav = () => { 

	return (
		<><h1>Tree View Side Nav</h1><div className='tree-menu-container'>

			<MenuList items={sideMenu} />
		</div></>
	)
}

export default TreeViewSideNav;