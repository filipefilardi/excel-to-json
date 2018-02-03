import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
		<header> 

		<nav>
			<ul>
				<li><Link to="/">Convert</Link></li>
				<li><a href="#">Download</a></li>
				<li><Link to="/search">Search</Link></li>
			</ul>
		</nav>

		</header>
    );
  }
}

export default Header;