import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { DECREASE_COUNT, INCREASE_COUNT } from '../../redux/constant/groundTwo';
import Wrapper from '../Common/Wrapper';

const GTLS = ({ onClickHandler }) => {
	const groundTwoCount = useSelector(state => state.groundTwoReducer.count);

	return (
		<Wrapper GROUNDLEFT>
			<div>
				<Button
					onClick={() => onClickHandler(INCREASE_COUNT)}
					variant="contained"
				>
					GTLS Increase Button
				</Button>
				&nbsp;
				<Button
					onClick={() => onClickHandler(DECREASE_COUNT)}
					variant="contained"
				>
					GTLS Decrease Button
				</Button>
			</div>
			{groundTwoCount}
		</Wrapper>
	);
};

export default GTLS;
