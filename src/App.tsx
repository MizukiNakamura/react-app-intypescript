import React from 'react';

interface AppProps {
	message?: string;
	name?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message, name }) => {
	return <div>{message + ' ' + name}</div>;
};

App.defaultProps = {
	message: 'default message!',
	name: 'default name',
};

export default App;
