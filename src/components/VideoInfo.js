import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';

import '../css/videoInfo.css';

const VideoInfo = ({
	videoKey,
	img,
	avatar,
	title,
	channelName,
	views,
	postedDate,
}) => {
	const history = useHistory();

	const showVideo = (key) => {
		history.push(`/videoPlayer/${key}`);
	};

	return (
		<div className='videoInfo'>
			<div>
				<img
					src={img}
					className='videoInfo__img'
					alt={title}
					onClick={() => showVideo(videoKey)}
				/>
			</div>
			<div className='videoInfo__details'>
				<Avatar src={avatar} className='videoDetails__avatar' />
				<p>{title.length > 80 ? title.slice(0, 50) + '...' : title}</p>
			</div>
			<div className='videoInfo__channel'>
				<h5>{channelName}</h5>
			</div>

			<div className='videoInfo__views'>
				<div>
					<p>{`${views} -`} </p>
				</div>
				<div>
					<p>{`${postedDate}`}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoInfo;
