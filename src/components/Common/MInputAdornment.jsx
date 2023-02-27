import { InputAdornment } from '@mui/material';
import React from 'react';

const MInputAdornment = ({ position, value }) => (
	<InputAdornment position={position}>{value}</InputAdornment>
);

export default MInputAdornment;
