import React, { useState, useRef, useEffect } from 'react';

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

	const renderTimes = useRef<number>(0);
	useEffect(() => {
		console.log('effect');
		renderTimes.current = renderTimes.current + 1;
	});

	return (
		<div>
			{value}
			<br />
			<button onClick={handleClickPlus}>+</button>
			<button onClick={handleClickMinus}>-</button>
			<button onClick={handleClickReset}>リセット</button>

			<div>レンダー回数：{renderTimes.current} 回</div>
		</div>
	);
};

export default Counter;
