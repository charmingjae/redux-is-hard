import React, { useEffect } from 'react';
import Wrapper from '../Common/Wrapper';
import MemberAlumniContainer from './components/MemberAlumniContainer';

const MemberContainer = () => {
	useEffect(() => {}, []);

	return (
		<Wrapper MEMBER_CONTAINER key="member_container">
			<MemberAlumniContainer />
		</Wrapper>
	);
};

export default MemberContainer;
