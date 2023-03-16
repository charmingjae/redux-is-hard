import defaultAPI from './api';

const getRequest = ({ queryKey }) => {
	try {
		const response = defaultAPI.get('test/get', {
			params: {
				queryKey: queryKey[1],
			},
		});
		return response;
	} catch (e) {
		console.log('Error : ', e);
		alert('Error occured');
		return null;
	}
};

export const getAPI = { getRequest };
