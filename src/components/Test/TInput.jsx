import { TextField } from '@mui/material';
import React from 'react';

const TInput = ({ id, label, variant, register }) => (
	<TextField
		required
		id={id}
		label={label}
		variant={variant}
		{...register?.(id)}
	/>
);

export default TInput;
