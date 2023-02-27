import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from '../../containers/Common/Wrapper';
import { movePage } from '../../redux/reducer/page';

const Main = () => {
	const dispatch = useDispatch();
	const onLoaded = () => dispatch(movePage('main'));
	useEffect(() => {
		console.log('Main page loaded.');
		onLoaded();
	}, []);

	return <Wrapper MAIN>MAIN</Wrapper>;
};

export default Main;
