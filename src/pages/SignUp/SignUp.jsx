import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CFormTheme from '../../components/Common/CFormTheme';
import Wrapper from '../../containers/Common/Wrapper';
import SignUpContainer from '../../containers/SignUp/SignUpContainer';
import { movePage } from '../../redux/reducer/page';

const SignUp = () => {
	const dispatch = useDispatch();
	const onLoaded = () => dispatch(movePage('signUp'));
	useEffect(() => {
		console.log('Sign up load');
		onLoaded();
	}, []);

	return (
		<Wrapper SIGNUP>
			<CFormTheme value="Sign Up" fontSize="25px" />
			<SignUpContainer />
		</Wrapper>
	);
};

export default SignUp;
