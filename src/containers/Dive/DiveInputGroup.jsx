import React from 'react';
import AInput from '../../components/Common/AInput';
import { DIVE_INPUT_GROUP } from '../../mocks/dive';

const DiveInputGroup = () =>
	DIVE_INPUT_GROUP.map(element => (
		<AInput
			key={element.label}
			label={element.label}
			name={element.name}
			required={element.required}
			message={element.message}
			inputType={element.inputType}
		/>
	));

export default DiveInputGroup;
