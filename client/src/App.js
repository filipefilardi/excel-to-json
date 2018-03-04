import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={Dashboard} />
			</BrowserRouter>
		);
	}
}

export default App;
