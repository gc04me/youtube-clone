import React from 'react';

import '../css/SidebarIcon.css';

const SideBarIcons = ({ Icon, title, active }) => {
	return (
		<div className={active ? 'sidebarIcon activeStyle ' : 'sidebarIcon'}>
			<Icon />
			<p>{title}</p>
		</div>
	);
};

export default SideBarIcons;
