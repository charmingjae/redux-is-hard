import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrite = styled.a`
	color: gray;
`;

const CWrite = ({ value, writeElement }) => (
	<NavLink to={writeElement.link}>
		<StyledWrite>{value}</StyledWrite>
	</NavLink>
);

export default CWrite;
