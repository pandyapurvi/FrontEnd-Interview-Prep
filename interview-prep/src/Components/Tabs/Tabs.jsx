
import React, { useState } from 'react';
import './styles.css';

const Tabs = ({ tabsContent }) => {
	const [activeTab, setActiveTab] = useState(0)
	return <div className='tabs-container'>
		<h3>Tabs component</h3>
		<div className='tabs'>
		{tabsContent.map((tab, index) => {
			return <div key={tab.title}>
				<button onClick={() => setActiveTab(index)}
					className='tab-button'
					style={{
					backgroundColor: activeTab === index ? 'lightblue' : 'white',
				}}>
					{tab.title}
				</button>
			</div>
		})}
			</div>
		<div>
			{tabsContent[activeTab].content}
		</div>
	</div>
};

export default Tabs;