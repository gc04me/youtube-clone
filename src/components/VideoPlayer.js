import React, { useContext } from 'react';
import { Context } from '../App';
import { Helmet } from 'react-helmet';
import './../css/VideoPlayer.css';

const VideoPlayer = (props) => {
	const sampleData = useContext(Context);
	const videoNumber = +window.location.href.split('/').slice(-1).join('');

	const selectedVideo = sampleData.filter((item) => item.id === videoNumber);

	console.log(selectedVideo);

	return (
		<div>
			<div className='video'>
				<Helmet>
					<meta charSet='utf-8' />
					<title>Play Video</title>
					<meta name='description' content='Play Videos by gaurav Chandra' />
				</Helmet>
				<iframe
					className='videoPlayer'
					src={selectedVideo[0].src}
					title='YouTube video player'
					frameBorder='5'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<div className='video__details'>
				<div className='videoPlayerTitle'>
					<h4>{selectedVideo[0].title}</h4>
				</div>
				{/* <div className='videoDesc'>
					<div>
						<p>{`${selectedVideo[0].views} -`} </p>
					</div>
					<div>
						<p>{`${selectedVideo[0].postedDate}`}</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default VideoPlayer;
