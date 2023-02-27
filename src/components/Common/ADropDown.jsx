import { Form, Select } from 'antd';
import React from 'react';
import { VALIDATION_PLEASE_USER_SELECT } from '../../mocks/validataion';

const ADropDown = ({ label, name, options, required, width }) => (
	<Form.Item
		label={label}
		name={name}
		colon={false}
		rules={[
			{ required, message: VALIDATION_PLEASE_USER_SELECT + ' ' + label },
		]}
		style={{ width: width || '100%' }}
	>
		<Select
			showSearch
			placeholder={`Select ${label}`}
			optionFilterProp="children"
			filterOption={(input, option) =>
				(option?.label ?? '')
					.toLowerCase()
					.includes(input.toLowerCase())
			}
			options={options}
		/>
	</Form.Item>
);

export default ADropDown;
