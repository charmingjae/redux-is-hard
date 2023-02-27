import React from 'react';
import MInputAdornment from '../components/Common/MInputAdornment';
import { getYearData } from '../utils/common';

export const SIGNUP_DEFAULT_INPUT_GROUP = [
	{
		key: 1,
		id: 'basicUserNumber',
		label: 'User Number',
		variant: 'outlined',
		width: '90%',
		required: true,
		type: 'text',
	},
	{
		key: 2,
		id: 'basicUserPassword',
		label: 'Password',
		variant: 'outlined',
		width: '90%',
		required: true,
		type: 'password',
	},
	{
		key: 3,
		id: 'basicUserPaswordVerify',
		label: 'Password Verification',
		variant: 'outlined',
		width: '90%',
		required: true,
		type: 'password',
	},
	{
		key: 4,
		id: 'basicUserGitHub',
		label: 'gitHub',
		variant: 'outlined',
		width: '90%',
		required: false,
		type: 'text',
		startAdornment: (
			<MInputAdornment position="start" value="github.com/" />
		),
	},
];

export const SIGNUP_DEFAULT_POSITION_GROUP = [
	{
		label: 'Student',
		value: 'student',
	},
	{
		label: 'Professor',
		value: 'professor',
	},
	{
		label: 'Alumni',
		value: 'alumni',
	},
];

export const SIGNUP_STUDENT_GRADE = [
	{
		label: '1',
		value: '1',
	},
	{
		label: '2',
		value: '2',
	},
	{
		label: '3',
		value: '3',
	},
	{
		label: '4(Advanced)',
		value: '4',
	},
];

export const SIGNUP_STUDENT_CLASS = [
	{
		label: 'A',
		value: 'A',
	},
	{
		label: 'B',
		value: 'B',
	},
	{
		label: 'C',
		value: 'C',
	},
	{
		label: 'J',
		value: 'J',
	},
];

export const SIGNUP_GRADUATE_YEAR = getYearData();
