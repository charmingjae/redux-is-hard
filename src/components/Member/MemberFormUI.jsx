import React from 'react';
import styled from 'styled-components';

const StyledMemberFormUI = styled.div`
	width: 250px;
	height: 250px;
	border: 1px solid black;
	border-radius: 5px;
	box-shadow: 0 10px 10px -10px black;
	display: grid;
	justify-items: center;
	align-items: center;
	background-color: white;
`;

const CMemberFormUI = () => {
	return <StyledMemberFormUI>Column</StyledMemberFormUI>;
};

export default CMemberFormUI;
