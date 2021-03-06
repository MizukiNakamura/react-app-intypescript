import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error(); 
	}
};

const CounterWithReducer: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			count: {state.count}
			<br />
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
		</div>
	);
};

export default CounterWithReducer;
