import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_LOGO_NAME } from '../../mocks/header';
import Wrapper from '../Common/Wrapper';

const HeaderLogo = ({ gridArea }) => {
	useEffect(() => {}, []);

	return (
		<Wrapper gridArea={gridArea}>
			<NavLink to="/">{HEADER_LOGO_NAME}</NavLink>
		</Wrapper>
	);
};

export default HeaderLogo;
