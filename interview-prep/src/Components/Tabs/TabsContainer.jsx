
import React from 'react';
import Tabs from './Tabs';

const TabsContainer = () => {
	const tabs = [
		{
			title: 'Tab 1',
			content: 'Tab 1 content'
		},
		{
			title: 'Tab 2',
			content: 'Tab 2 content'
		},
		{
			title: 'Tab 3',
			content: 'Tab 3 content'
		}
	]

	return <Tabs tabsContent={tabs}/>
}
export default TabsContainer;