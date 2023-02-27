import React from 'react';
import { NavLink } from 'react-router-dom';
import CButton from '../../components/Common/CButton';
import { HEADER_MENU_ELEMENT } from '../../mocks/header';
import Wrapper from '../Common/Wrapper';

const HeaderMenu = () => (
	<Wrapper gridArea="MENU">
		{HEADER_MENU_ELEMENT.map(element => (
			<NavLink to={element.to} key={element.key}>
				<CButton MENU value={element.label} />
			</NavLink>
		))}
	</Wrapper>
);

export default HeaderMenu;
