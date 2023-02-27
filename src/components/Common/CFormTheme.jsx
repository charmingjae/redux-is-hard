import React from 'react';
import styled from 'styled-components';

const StyledFormTheme = styled.h1`
	color: black;
	font-size: ${props => props.fontSize || '10px'};
	margin-top: 20px;
	margin-bottom: 20px;
`;

const CFormTheme = ({ value, fontSize }) => (
	<StyledFormTheme fontSize={fontSize}>{value}</StyledFormTheme>
);

export default CFormTheme;
