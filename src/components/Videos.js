import React, { useContext } from 'react';

import '../css/Videos.css';
import VideoInfo from './VideoInfo';

import { Context } from '../App';

const Videos = () => {
	const data = useContext(Context);

	return (
		<div className='videos'>
			{data &&
				data.map((item) => {
					return (
						<VideoInfo
							videoKey={item.id}
							key={item.id}
							img={item.img}
							avatar={item.avatar}
							title={item.title}
							channelName={item.channelName}
							views={item.views}
							postedDate={item.postedDate}
						/>
					);
				})}
		</div>
	);
};

export default Videos;
