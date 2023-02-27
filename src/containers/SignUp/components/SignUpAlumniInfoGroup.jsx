import { Box, Divider } from '@mui/material';
import React, { useEffect } from 'react';

const SignUpAlumniInfoGroup = () => {
	useEffect(() => {}, []);

	return (
		<Box sx={{ width: '100%' }}>
			<Divider
				textAlign="left"
				sx={{ marginTop: '30px', marginBottom: '20px' }}
			>
				Alumni Info
			</Divider>
		</Box>
	);
};

export default SignUpAlumniInfoGroup;
