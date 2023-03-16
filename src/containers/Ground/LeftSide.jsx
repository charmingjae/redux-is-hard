import { Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getAPI } from '../../apis/get';
import { QUERY_KEY_BASIC } from '../../mocks/queryKey';
import { ADD_OBJ, PRESENT_FROM } from '../../redux/constant/ground';
import { presentFrom } from '../../redux/reducer/ground';
import Wrapper from '../Common/Wrapper';

const LeftSide = ({ basic, dispatch, obj }) => {
	const onButtonClickHandler = () => {
		dispatch(presentFrom(PRESENT_FROM, 'Left'));
	};

	const testKey = useSelector(state => state.queryReducer.testKey);

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

	const [queryData, setQueryData] = useState(null);
	const { isLoading, isFetching } = useQuery(
		[QUERY_KEY_BASIC, testKey],
		getAPI.getRequest,
		{
			onSuccess: data => {
				console.log('Get Request Data... : ', data);
				setQueryData(data.data);
			},
			onError: () => {
				console.log('Error occured. Catch outside.');
			},
			refetchOnWindowFocus: false,
		},
	);

	if (isLoading || isFetching) return <div>Loading....</div>;

	return (
		<Wrapper GROUNDLEFT>
			<Stack direction="row" spacing={3}>
				<Button onClick={onButtonClickHandler} variant="contained">
					Left Button
				</Button>
				<Button onClick={onAddClickHandler} variant="contained">
					ADD OBJ
				</Button>
			</Stack>
			<Stack spacing={3}>
				<div style={{ border: '1px solid black', padding: '100px' }}>
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
				<div style={{ border: '1px solid black', padding: '100px' }}>
					Result : {queryData}
				</div>
			</Stack>
		</Wrapper>
	);
};

export default LeftSide;
