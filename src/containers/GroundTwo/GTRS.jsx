import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { DECREASE_COUNT, INCREASE_COUNT } from '../../redux/constant/groundTwo';
import Wrapper from '../Common/Wrapper';

const GTRS = ({ onClickHandler }) => {
	const groundTwoCount = useSelector(state => state.groundTwoReducer.count);

	return (
		<Wrapper GROUNDRIGHT>
			<div>
				<Button
					onClick={() => onClickHandler(INCREASE_COUNT)}
					variant="contained"
				>
					GTRS Increase Button
				</Button>
				&nbsp;
				<Button
					onClick={() => onClickHandler(DECREASE_COUNT)}
					variant="contained"
				>
					GTRS Decrease Button
				</Button>
			</div>
			{groundTwoCount}
		</Wrapper>
	);
};

export default GTRS;
