import { fireEvent, render, screen } from '@testing-library/react';
import context from 'jest-plugin-context';
import React from 'react';
import { Provider } from 'react-redux';
import { INCREASE_COUNT } from '../../../redux/constant/groundTwo';
import store from '../../../redux/store';
import GTLS from '../GTLS';
import groundTwoReducer from '../../../redux/reducer/groundTwo';

describe('GTLS TEST', () => {
	const mockFn = jest.fn();

	const renderGTLS = () => {
		render(
			<Provider store={store}>
				<GTLS onClickHandler={mockFn} />
			</Provider>,
		);
	};

	context('When Button Click', () => {
		it('Increase Button will be activated', () => {
			renderGTLS();

			const initialCount = 0;
			const expectedCnt = 1;

			fireEvent.click(screen.getByText(/GTLS Increase Button/i));
			expect(
				groundTwoReducer(
					{ count: initialCount },
					{ type: INCREASE_COUNT },
				),
			).toEqual({
				count: expectedCnt,
			});
		});

		it('Decrease Button will be activated', () => {
			renderGTLS();
			fireEvent.click(screen.getByText(/GTLS Decrease Button/i));
			expect(mockFn).toBeCalled();
		});
	});
});
