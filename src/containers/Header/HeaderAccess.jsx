import React, { useEffect } from 'react';
import HeaderAccessAccess from '../../components/Header/HeaderAccessAccess';
import Wrapper from '../Common/Wrapper';
// import { HEADER_LOGO_NAME } from '../../mocks/header';

const HeaderAccess = ({ gridArea }) => {
	useEffect(() => {
		console.log('GRID AREA : ', gridArea);
	}, []);

	return (
		<Wrapper gridArea={gridArea}>
			<HeaderAccessAccess />
		</Wrapper>
	);
};

export default HeaderAccess;
