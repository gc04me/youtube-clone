import { combineReducers } from 'redux';

const loginReducer = (login = {}, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'SIGN_IN':
			login = { ...login, userName: action.payload };
			return login;
		case 'SIGN_OUT':
			return null;
		case 'HAS_ACCOUNT':
			login = { ...login, hasAccount: action.payload };
			return login;
		default:
			return login;
	}
};

export default combineReducers({
	login: loginReducer,
});
