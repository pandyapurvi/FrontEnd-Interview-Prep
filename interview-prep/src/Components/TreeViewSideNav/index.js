import React from 'react';
import sideMenu from './data'
import MenuList from './menu-list';


const TreeViewSideNav = () => { 

	return (
		<><h1>Tree View Side Nav</h1><div style={{
			height: '100vh',
			display: 'flex',
		}}>

			<MenuList items={sideMenu} />
		</div></>
	)
}

export default TreeViewSideNav;