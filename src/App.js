import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import TransProvider from './context/GlobalState';

class App extends React.Component {
	render(){
		return (
			<TransProvider>
				<Header />
				<Main/>
			</TransProvider>
		)
	

	}
}

export default App;
