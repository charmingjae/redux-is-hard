import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	font-size: 15px;
	padding: 10px 30px;
	background-color: white;
	border: 1px solid black;
	border-radius: 5px;
	cursor: pointer;

	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;

	&:hover {
		background-color: #123524;
		color: white;
	}

	${props =>
		props.READY &&
		css`
			margin-top: 30px;
			margin-bottom: 30px;
			width: 100%;
		`}

	${props =>
		props.MENU &&
		css`
			font-style: bold;
			font-size: 20px;
			border: none;
			&:hover {
				background-color: white;
				font-size: 23px;
				font-style: bold;
				color: #123524;
			}
		`}
`;

const CButton = ({ value, onClickHandler, ...props }) => (
	<StyledButton onClick={onClickHandler} {...props}>
		{value}
	</StyledButton>
);

export default CButton;
