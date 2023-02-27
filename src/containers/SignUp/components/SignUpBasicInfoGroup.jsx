import { Box, Divider, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import AInput from '../../../components/Common/AInput';
import MToggleButtonGroup from '../../../components/Common/MToggleButtonGroup';
import {
	SIGNUP_DEFAULT_INPUT_GROUP,
	SIGNUP_DEFAULT_POSITION_GROUP,
} from '../../../mocks/signUp';

const SignUpBasicInfoGroup = ({ register, control }) => {
	useEffect(() => {}, []);

	return (
		<Box sx={{ width: '100%' }}>
			<Divider textAlign="left" sx={{ marginBottom: '20px' }}>
				Basic Info
			</Divider>
			<Stack alignItems="center" spacing={2}>
				<Controller
					name="basicUserPosition"
					control={control}
					render={({ field }) => (
						<MToggleButtonGroup
							item={SIGNUP_DEFAULT_POSITION_GROUP}
							onChange={field.onChange}
						/>
					)}
				/>

				{SIGNUP_DEFAULT_INPUT_GROUP.map(element => (
					<AInput {...element} register={register} />
				))}
			</Stack>
		</Box>
	);
};

export default SignUpBasicInfoGroup;
