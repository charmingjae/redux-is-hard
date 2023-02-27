import { TextField } from '@mui/material';
import React from 'react';

const AInput = ({
	id,
	label,
	variant,
	required,
	register,
	width,
	type,
	startAdornment,
}) => (
	<TextField
		style={{ width }}
		required={required || false}
		id={id}
		label={label}
		variant={variant}
		type={type || 'text'}
		InputProps={{
			startAdornment,
		}}
		{...register?.(id)}
	/>
);

export default AInput;
