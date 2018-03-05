import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Search from "./Search/Search";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Dashboard} />
					<Route path="/search" component={Search} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
