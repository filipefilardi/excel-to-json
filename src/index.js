import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Converter from './components/converter/converter';
import Downloads from './components/donwloads/donwloads';
import Search from './components/search/search';

const app = {
	// backgroundColor: 'black'
};

const pages = {
	// backgroundColor: 'blue',
	// marginHorizontal: '30px',
};

ReactDOM.render(
	<Router>
		<div style={app}>
			<Header />

			<div style={pages}>
				<Route exact path='/' component={Converter} />
				<Route exact path='/downloads' component={Downloads} />
				<Route exact path='/search' component={Search} />
			</div>

			<Footer />
		</div>
	</Router>,
	document.getElementById('root')
);

