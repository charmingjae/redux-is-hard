import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	width: 100%;

	${props =>
		// for Header
		props.header &&
		css`
			z-index: 999;
			position: sticky;
			padding-top: 30px;
			top: -30px;
			width: 100%;
			height: 100px;
			background-color: white;
			display: grid;
			justify-items: center;
			align-items: center;
			grid-template-areas: 'LOGO MENU ACCESS';
			grid-template-columns: 1fr 7fr 1fr;
			box-shadow: 0 10px 10px -10px black;
		`};

	${props =>
		props.gridArea === 'MENU' &&
		css`
			display: grid;
			grid-template-columns: 1fr 1fr;
		`}

	${props =>
		props.gridArea === 'LOGO' &&
		css`
			display: grid;
			justify-items: center;
			align-items: center;
			width: 100%;
			height: 100%;
			grid-area: ${props.gridArea};
		`}

	${props =>
		props.gridArea === 'ACCESS' &&
		css`
			display: grid;
			justify-items: center;
			align-items: center;
			width: 100%;
			height: 100%;
			grid-area: ${props.gridArea};
		`}

	${props =>
		props.CONTENT &&
		css`
			display: grid;
			justify-items: center;
			align-items: center;
			height: 100%;
			background-color: white;
		`}

	${props =>
		props.DIVE &&
		css`
			display: grid;
			justify-items: center;
			align-items: center;
			width: 500px;
			height: 500px;
			border: 1px solid black;
			border-radius: 5px;
			box-shadow: 0 20px 20px -20px black;
		`}

	${props =>
		props.SIGNUP &&
		css`
			width: 500px;
			border: 1px solid black;
			border-radius: 5px;
			box-shadow: 0 20px 20px -20px black;
		`}

	${props =>
		props.MEMBER_WRAPPER &&
		css`
			background-color: lightgray;
		`}

	${props =>
		props.MEMBER_CONTAINER &&
		css`
			background-color: aqua;
		`}

	${props =>
		props.MEMBER_ALUMNI &&
		css`
			width: 1200px;
			background-color: yellow;
			margin-top: 50px;
		`}

	${props =>
		props.TEST &&
		css`
			// background-color: black;
			width: 2000px;
			height: 500px;
			border: 1px solid black;
			box-shadow: 0 20px 20px -20px black;
		`}

	${props =>
		props.GROUND &&
		css`
			background-color: lightgray;
			height: 100%;
			grid-template-columns: 1fr 1fr;
		`}

	${props =>
		props.GROUNDLEFT &&
		css`
			background-color: white;
			height: 100%;
			border: 1px solid black;
		`}

	${props =>
		props.GROUNDRIGHT &&
		css`
			background-color: white;
			height: 100%;
			border: 1px solid black;
		`}
`;

const Wrapper = ({ children, ...props }) => (
	<StyledWrapper {...props}>{children}</StyledWrapper>
);
export default Wrapper;
