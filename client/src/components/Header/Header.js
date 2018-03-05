import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to={"/"} className="anchor">Converter</Link>
					</li>
					<li>
						<Link to={"/search"} className="anchor">Search</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
