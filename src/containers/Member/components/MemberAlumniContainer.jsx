import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import CMemberFormUI from '../../../components/Member/MemberFormUI';
import Wrapper from '../../Common/Wrapper';

const MemberAlumniContainer = () => {
	useEffect(() => {}, []);

	return (
		<Wrapper MEMBER_ALUMNI key="member_alumni">
			<Row gutter={[32, 24]} justify="center" align="center">
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>
				<Col span={6}>
					<CMemberFormUI />
				</Col>

				{/* <Col span={6}>Column</Col>
				<Col span={6}>Column</Col>
				<Col span={6}>Column</Col>
				<Col span={6}>Column</Col>
				<Col span={6}>Column</Col>
				<Col span={6}>Column</Col>
				<Col span={6}>Column</Col> */}
			</Row>
		</Wrapper>
	);
};

export default MemberAlumniContainer;
