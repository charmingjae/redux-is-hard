import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from '../../containers/Common/Wrapper';
import GTLS from '../../containers/GroundTwo/GTLS';
import GTRS from '../../containers/GroundTwo/GTRS';
import { setCount } from '../../redux/reducer/groundTwo';

const GroundTwo = () => {
	useEffect(() => {}, []);

	const dispatch = useDispatch();

	const onClickHandler = type => {
		console.log('TYPE  ', type);
		dispatch(setCount(type));
	};

	return (
		<Wrapper GROUND>
			<GTLS onClickHandler={onClickHandler} />
			<GTRS onClickHandler={onClickHandler} />
		</Wrapper>
	);
};

export default GroundTwo;
