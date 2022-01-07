import React from 'react';

import '../css/SideBar.css';
import SideBarIcons from './SideBarIcons';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';

const Sidebar = () => {
	return (
		<div className='sideBar'>
			<SideBarIcons active Icon={HomeSharpIcon} title={'Home'} />
			<SideBarIcons Icon={ExploreSharpIcon} title={'Explore'} />
			<SideBarIcons Icon={SubscriptionsSharpIcon} title={'Subscriptions'} />
			<hr />
			<SideBarIcons Icon={VideoLibrarySharpIcon} title={'Library'} />
			<SideBarIcons Icon={HistorySharpIcon} title={'History'} />
			<SideBarIcons Icon={ThumbUpTwoToneIcon} title={'Liked Videos'} />
			<hr />
		</div>
	);
};

export default Sidebar;
