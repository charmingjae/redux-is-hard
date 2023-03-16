import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/Style/GlobalStyle';
import Wrapper from './containers/Common/Wrapper';
import Header from './containers/Header';
import Dive from './pages/Dive';
import Ground from './pages/Ground';
import GroundTwo from './pages/GroundTwo';
import Main from './pages/Main';
import Member from './pages/Member';
import SignUp from './pages/SignUp/SignUp';

const App = () => {
	// const [api, contextHolder] = notification.useNotification();
	useEffect(() => {
		// api.open({
		// 	message: 'Notification Title',
		// 	description:
		// 		'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
		// 	className: 'custom-class',
		// 	style: {
		// 		width: 600,
		// 	},
		// });
	}, []);

	return (
		<>
			<GlobalStyle />
			<CssBaseline />
			<Header />
			{/* {contextHolder} */}
			<Wrapper CONTENT>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="dive">
						<Route index element={<Dive />} />
						<Route path="signUp" element={<SignUp />} />
					</Route>
					<Route path="member">
						<Route index element={<Member />} />
					</Route>
					<Route path="ground">
						<Route index element={<Ground />} />
					</Route>
					<Route path="groundTwo">
						<Route index element={<GroundTwo />} />
					</Route>
				</Routes>
			</Wrapper>
		</>
	);
};

export default App;
