import React, { createContext, useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Videos from './components/Videos';
import Login from './components/Login';
import VideoPlayer from './components/VideoPlayer';
import { sampleData } from './data/sample-data';
import { connect } from 'react-redux';
import { addUser, signOut, hasAccount } from './actions';
import fire from './firebase';
import { Helmet } from 'react-helmet';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const Context = createContext();

function App(props) {
	useEffect(() => {
		fire.auth().onAuthStateChanged((user) => {
			if (user && user.displayName) {
				props.addUser({ name: user.displayName });
			} else if (!user) {
				props.addUser({ name: null });
			}
		});
	}, []);

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>YouTube clone </title>
				<meta
					name='description'
					content='Youtube clone by gaurav chandra srivastava'
				/>
			</Helmet>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Header />
						<div className='main'>
							<Context.Provider value={sampleData}>
								<SideBar />
								<Videos />
							</Context.Provider>
						</div>
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route
						path='/videoPlayer'
						children={
							<Context.Provider value={sampleData}>
								<Header />
								<VideoPlayer />
							</Context.Provider>
						}
					></Route>
				</Switch>
			</Router>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		login: state.login,
	};
};
export default connect(mapStateToProps, { addUser, signOut, hasAccount })(App);
