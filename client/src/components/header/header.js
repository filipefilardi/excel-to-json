import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends Component {
  render() {
    return (
		<header> 

		<nav>
			<ul>
				<li><Link to="/" className="link">Convert</Link></li>
				<li><Link to="/downloads" className="link">Download</Link></li>
				<li><Link to="/search" className="link">Search</Link></li>
			</ul>
		</nav>

		</header>
    );
  }
}

export default Header;