import {
	Autocomplete,
	Box,
	// Button,
	Divider,
	Stack,
	TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
	SIGNUP_STUDENT_CLASS,
	SIGNUP_STUDENT_GRADE,
} from '../../../mocks/signUp';

const SignUpStudentInfoGroupComponent = ({ register }) => (
	// const onChangeHandler = e => {
	// 	console.log('onChange : ', e.currentTarget.files);
	// };

	<>
		<Stack
			direction="row"
			spacing={2}
			justifyContent="center"
			alignItems="center"
		>
			<Autocomplete
				disablePortal
				id="userStudentGrade"
				options={SIGNUP_STUDENT_GRADE}
				renderInput={params => (
					<TextField
						{...params}
						label="Grade"
						sx={{ width: '215px' }}
						{...register?.('userStudentGrade')}
					/>
				)}
			/>
			<Autocomplete
				disablePortal
				id="userStudentClass"
				options={SIGNUP_STUDENT_CLASS}
				renderInput={params => (
					<TextField
						{...params}
						label="Class"
						sx={{ width: '215px' }}
						{...register?.('userStudentClass')}
					/>
				)}
			/>
		</Stack>
		{/* <Stack alignItems="center" spacing={2}>
				<Button
					sx={{ width: '90%' }}
					variant="contained"
					component="label"
				>
					Upload
					<input
						hidden
						accept="application/pdf"
						multiple
						type="file"
						onChange={onChangeHandler}
					/>
				</Button>
			</Stack> */}
	</>
);
const SignUpStudentInfoGroup = ({ register }) => {
	useEffect(() => {}, []);

	return (
		<Box sx={{ width: '100%' }}>
			<Divider
				textAlign="left"
				sx={{ marginTop: '30px', marginBottom: '20px' }}
			>
				Student Info
			</Divider>
			<SignUpStudentInfoGroupComponent register={register} />
		</Box>
	);
};

export default SignUpStudentInfoGroup;
