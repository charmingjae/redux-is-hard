import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { ADD_OBJ, PRESENT_FROM } from '../../redux/constant/ground';
import { presentFrom } from '../../redux/reducer/ground';
import Wrapper from '../Common/Wrapper';

const LeftSide = ({ basic, dispatch, obj }) => {
	const onButtonClickHandler = () => {
		dispatch(presentFrom(PRESENT_FROM, 'Left'));
	};

	const onAddClickHandler = () => {
		dispatch(
			presentFrom(ADD_OBJ, {
				key: Math.floor(Math.random() * 100),
				name: 'Unknown Left',
				age: 100,
			}),
		);
	};

	useEffect(() => {
		console.log('Leftside rerendered.');
	}, []);

	return (
		<Wrapper GROUNDLEFT>
			<Button onClick={onButtonClickHandler} variant="contained">
				Left Button
			</Button>
			<Button onClick={onAddClickHandler} variant="contained">
				ADD OBJ
			</Button>
			<div>
				<p>
					Basic : <b>{basic}</b>
				</p>
				<p>Object</p>
				{obj.map(element => (
					<p key={element.key}>
						{JSON.stringify(element, undefined, 2)}
					</p>
				))}
				{/* <p>{JSON.stringify(GROUND_OBJECT_FIRST, null, 2)}</p> */}
			</div>
		</Wrapper>
	);
};

export default LeftSide;
