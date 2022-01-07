export const addUser = (payload) => {
	return {
		type: 'SIGN_IN',
		payload,
	};
};

export const signOut = (payload) => {
	return {
		type: 'SIGN_OUT',
		payload,
	};
};

export const hasAccount = (payload) => {
	return {
		type: 'HAS_ACCOUNT',
		payload,
	};
};
