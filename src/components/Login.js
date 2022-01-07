import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser, signOut, hasAccount } from '../actions';
import { useHistory } from 'react-router-dom';
import logo from '../assets/youTube.png';
import fire from '../firebase';
import { Helmet } from 'react-helmet';
import '../css/Login.css';

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [fullName, setFullName] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [hasAccount, setHasAccount] = useState('');
	const history = useHistory();

	// useEffect(() => {
	// 	authListener();
	// }, []);

	const clearInput = () => {
		setEmail('');
		setPassword('');
	};

	const clearError = () => {
		setEmailError('');
		setPasswordError('');
	};

	const handleLogin = () => {
		clearError();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				// eslint-disable-next-line default-case
				switch (err.code) {
					case 'auth/invalid-email':
					case 'auth/user-disabled':
					case 'auth/user-not-found':
						setEmailError(err.message);
						break;
					case 'auth/wrong-password':
						setPasswordError(err.message);
						break;
				}
			});
	};

	const handleSignUp = () => {
		clearError();
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user.updateProfile({
					displayName: fullName,
				});
			})
			.then(() => {
				props.addUser({ name: fullName });
			})
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				// eslint-disable-next-line default-case
				switch (err.code) {
					case 'auth/email-already-in-use':
					case 'auth/invalid-email':
						setEmailError(err.message);
						break;
					case 'auth/weak-password':
						setPasswordError(err.message);
						break;
				}
			});
	};

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>SignUp/Login-youtube</title>
				<meta name='description' content='SignUp/Login to youtube app' />
			</Helmet>
			<section className='login'>
				<div className='loginContainer'>
					<div className='login_image_div'>
						<img className='login__image' src={logo} alt='logo'></img>
					</div>
					{!hasAccount && (
						<div>
							<label>Full Name</label>
							<input
								type='text'
								autoFocus
								required
								value={fullName}
								onChange={(e) => {
									setFullName(e.target.value);
								}}
							/>
						</div>
					)}
					<label>Email</label>
					<input
						type='text'
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<p className='errorMsg'>{emailError}</p>
					<label>Password</label>
					<input
						type='password'
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<p className='errorMsg'>{passwordError}</p>
					<div className='btnContainer'>
						{hasAccount ? (
							<>
								<button onClick={handleLogin}>Sign In</button>
								<p>
									Don't have an Account?
									<span
										onClick={() => {
											setHasAccount(!hasAccount);
										}}
									>
										Sign Up
									</span>
								</p>
							</>
						) : (
							<>
								<button onClick={handleSignUp}>Sign Up</button>
								<p>
									Have an account?
									<span
										onClick={() => {
											setHasAccount(!hasAccount);
										}}
									>
										Sign In
									</span>
								</p>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		login: state.login,
	};
};

export default connect(mapStateToProps, { addUser, signOut, hasAccount })(
	Login
);
