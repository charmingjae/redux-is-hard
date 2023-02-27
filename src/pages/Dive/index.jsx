import { Form } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CButton from '../../components/Common/CButton';
import CWrite from '../../components/Common/CWrite';
import Wrapper from '../../containers/Common/Wrapper';
import DiveInputGroup from '../../containers/Dive/DiveInputGroup';
import { WRITE_ELEMENT } from '../../mocks/common';
import { DIVE_WANNA_REGISTER } from '../../mocks/dive';
import { movePage } from '../../redux/reducer/page';
import { getFilteredWriteElement } from '../../utils/common';

const Dive = () => {
	const dispatch = useDispatch();
	const onLoaded = () => dispatch(movePage('signUp'));

	useEffect(() => {
		console.log('Dive page loaded.');
		onLoaded();
	}, []);

	const onFinishHandler = value => {
		console.log('OnFinish : ', value);
	};

	return (
		<Wrapper DIVE>
			<Form name="signInForm" onFinish={onFinishHandler}>
				<Wrapper>
					<DiveInputGroup />
					<CButton value="Sign In" />
					<CWrite
						value={DIVE_WANNA_REGISTER}
						writeElement={getFilteredWriteElement(
							WRITE_ELEMENT,
							'signUp',
						)}
					/>
				</Wrapper>
			</Form>
		</Wrapper>
	);
};

export default Dive;
