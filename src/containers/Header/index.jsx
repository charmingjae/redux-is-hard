import React from 'react';
import Wrapper from '../Common/Wrapper';
import HeaderAccess from './HeaderAccess';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = () => (
	<Wrapper header>
		<HeaderLogo gridArea="LOGO" />
		<HeaderMenu gridArea="MENU" />
		<HeaderAccess gridArea="ACCESS" />
	</Wrapper>
);
export default Header;
