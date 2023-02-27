import React from 'react';
import { NavLink } from 'react-router-dom';
import CButton from '../Common/CButton';

const HeaderAccessAccess = () => (
	<>
		<NavLink to="/dive">
			<CButton value="Dive!" />
		</NavLink>
		{/* <Button value="Log In" /> */}
	</>
);

export default HeaderAccessAccess;
