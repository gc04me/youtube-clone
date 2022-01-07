import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsTwoToneIcon from '@material-ui/icons/NotificationsTwoTone';
import Avatar from '@material-ui/core/Avatar';

import logo from '../assets/youtube_logo_new-759.jpg';
import premium from '../assets/youtube-logo.jpg';
import '../css/Header.css';
import { useHistory } from 'react-router-dom';
import fire from '../firebase';

const Header = ({ login }) => {
	const initials =
		login?.userName?.name?.split(' ')[0].charAt(0).toUpperCase() +
		login?.userName?.name?.split(' ')[1].charAt(0).toUpperCase();

	const history = useHistory();

	const signIn = (e) => {
		console.log(e.target.value);
		console.log(login.userName);
		if (e.target.innerText.includes('Logout')) {
			handleLogout();
		} else {
			history.push('/login');
		}
	};

	const handleLogout = () => {
		fire.auth().signOut();
	};

	const showHome = () => {
		history.push('/');
	};

	return (
		<>
			<header className='header'>
				<div className='header__left'>
					<MenuIcon className='showIcon' />
					<img
						src={login?.userName?.name ? premium : logo}
						onClick={showHome}
						className='header__image'
						alt='youtube logo'
					></img>
				</div>
				<div className='showIcon header__center'>
					<input placeholder='Search'></input>
					<SearchIcon />
				</div>
				<div className='header__right'>
					<VideoCallOutlinedIcon className='showIcon header__right-icons' />
					<AppsOutlinedIcon className='showIcon header__right-icons' />
					<NotificationsTwoToneIcon className='showIcon header__right-icons' />
					<div className='header__right__avatar' onClick={signIn}>
						<Avatar
							style={{ backgroundColor: '#FF5722' }}
							alt='GC'
							src=''
							className='header__right-icons'
						>
							{initials || ''}
						</Avatar>
						<p className='header__right__avatar__text'>
							{login?.userName?.name ? 'Logout' : 'SIGN IN'}
						</p>
					</div>
				</div>
			</header>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		login: state.login,
	};
};

export default connect(mapStateToProps, { addUser })(Header);
