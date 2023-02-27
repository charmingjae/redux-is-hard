import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../containers/Common/Wrapper';
import LeftSide from '../../containers/Ground/LeftSide';
import RightSide from '../../containers/Ground/RightSide';

const Ground = () => {
	useEffect(() => {}, []);

	const dispatch = useDispatch();
	const basic = useSelector(state => state.groundReducer.basic);
	const obj = useSelector(state => state.groundReducer.obj);

	const passed = {
		basic,
		dispatch,
		obj,
	};

	return (
		<Wrapper GROUND>
			<LeftSide {...passed} />
			<RightSide {...passed} />
		</Wrapper>
	);
};

export default Ground;
