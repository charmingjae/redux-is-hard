import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';

const MToggleButtonGroup = ({ item, onChange }) => {
	const [toggleValue, setToggleValue] = useState(item?.[0]?.value);

	const handleChange = (event, value) => {
		if (onChange) {
			onChange(value);
		}
		setToggleValue(value);
	};

	const toggleControl = {
		value: toggleValue,
		onChange: handleChange,
		exclusive: true,
	};

	return (
		<ToggleButtonGroup
			size="large"
			{...toggleControl}
			aria-label="Large sizes"
		>
			{item.map(element => {
				const { label, value } = element;

				return (
					<ToggleButton value={value} key={value} color="success">
						{label}
					</ToggleButton>
				);
			})}
		</ToggleButtonGroup>
	);
};

export default MToggleButtonGroup;
