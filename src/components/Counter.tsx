import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {
	const initialValue = 0;
	const [value, setValue] = useState<number>(initialValue);

	const handleClickPlus = () => {
		setValue((prevValue) => prevValue + 1);
	};
	const handleClickMinus = () => {
		setValue((prevValue) => prevValue - 1);
	};
	const handleClickReset = () => {
		setValue(initialValue);
	};

	return (
		<div>
			{value}
			<br />
			<button onClick={handleClickPlus}>+</button>
			<button onClick={handleClickMinus}>-</button>
			<button onClick={handleClickReset}>リセット</button>
		</div>
	);
};

export default Counter;
