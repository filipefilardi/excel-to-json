import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
	render() {
		return (
			<div>
				<button onClick={() => axios.get('/api/')
  .then(function (response) {
    console.log(response);
  })}>hurray</button>
			</div>
		);
	}
}

export default App;
