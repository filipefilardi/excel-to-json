import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Converter from './components/converter/converter';
import Search from './components/search/search';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />

					<Route exact path='/' component={Converter} />
					<Route exact path='/search' component={Search} />
					
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;