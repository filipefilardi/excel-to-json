import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
    	<div>
	    	<input ref="searchbar" type="search" id="searchbar" placeholder="Search for similar token" />
			<span>
				<button>Buscar</button>
			</span>
    	</div>
    );
  }
}

export default Searchbar;