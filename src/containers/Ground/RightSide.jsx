import { Button, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { ADD_OBJ, PRESENT_FROM } from '../../redux/constant/ground';
import { presentFrom } from '../../redux/reducer/ground';
import { changeQueryKey } from '../../redux/reducer/query';
import Wrapper from '../Common/Wrapper';

const RightSide = ({ basic, dispatch, obj }) => {
	const onButtonClickHandler = () => {
		dispatch(presentFrom(PRESENT_FROM, 'Right'));
	};

	const onAddClickHandler = () => {
		dispatch(
			presentFrom(ADD_OBJ, {
				key: Math.floor(Math.random() * 100),
				name: 'Unknown Right',
				age: 100,
			}),
		);
	};

	// const queryClient = useQueryClient();
	const onQueryClickHandler = () => {
		// alert('Query');
		dispatch(changeQueryKey(2));
		// queryClient.invalidateQueries({ queryKey: ['test'] });
	};

	useEffect(() => {
		console.log('Rightside rerendered.');
	}, []);

	return (
		<Wrapper GROUNDRIGHT>
			<Stack direction="row" spacing={3}>
				<Button onClick={onButtonClickHandler} variant="contained">
					Right Button
				</Button>
				<Button onClick={onAddClickHandler} variant="contained">
					ADD OBJ
				</Button>
				<Button onClick={onQueryClickHandler} variant="contained">
					Query
				</Button>
			</Stack>
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
			</div>
		</Wrapper>
	);
};

export default RightSide;
