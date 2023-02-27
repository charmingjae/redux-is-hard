import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import CButton from '../../components/Common/CButton';
import { SIGNUP_DEFAULT_POSITION_GROUP } from '../../mocks/signUp';
import Wrapper from '../Common/Wrapper';
import SignUpAlumniInfoGroup from './components/SignUpAlumniInfoGroup';
import SignUpBasicInfoGroup from './components/SignUpBasicInfoGroup';
import SignUpStudentInfoGroup from './components/SignUpStudentInfoGroup';

const SignUpContainer = () => {
	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			basicUserPosition: SIGNUP_DEFAULT_POSITION_GROUP?.[0]?.value,
		},
	});

	const formControl = {
		register,
		control,
	};

	const userPosition = useWatch({
		control,
		name: 'basicUserPosition',
	});

	const handleOnSubmit = data => {
		console.log('Form Data : ', data);
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit(handleOnSubmit)}>
				<SignUpBasicInfoGroup {...formControl} />
				{userPosition === 'student' && (
					<SignUpStudentInfoGroup {...formControl} />
				)}
				{userPosition === 'alumni' && <SignUpAlumniInfoGroup />}
				<CButton READY value="Ready!" type="submit" />
			</form>
		</Wrapper>
	);
};

export default SignUpContainer;
