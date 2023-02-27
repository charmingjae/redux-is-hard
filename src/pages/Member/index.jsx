import React, { useEffect } from 'react';
import Wrapper from '../../containers/Common/Wrapper';
import MemberContainer from '../../containers/Member/MemberContainer';

const Member = () => {
	useEffect(() => {
		console.log('Member page loaded.');
	}, []);

	return (
		<Wrapper MEMBER_WRAPPER key="member_wrapper">
			<MemberContainer />
		</Wrapper>
	);
};

export default Member;
