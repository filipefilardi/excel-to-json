import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Search from "./components/Search/Search";

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
