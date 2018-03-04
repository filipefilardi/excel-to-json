import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

import loading from "./loading.gif";
import "./dashboard.css";

const theme = {
	activeClassName: "dropzone-active",
	acceptClassName: "dropzone-accept"
};

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			files: []
		};

		this.handleDrop = this.handleDrop.bind(this);
	}

	handleDrop(files) {
		let filenames = [];
		let data = new FormData();

		for (var i = 0; i < files.length; i++) {
			let file = files[i];

			let extension = file.name.split(".").pop();
			if (
				extension === "xlsx" ||
				extension === "xlsm" ||
				extension === "xltx" ||
				extension === "xltm"
			) {
				data.append("file", file);
				filenames[i] = file.name;
			}
		}

		this.setState({
			isLoading: true,
			files: filenames
		});

		const config = {
			headers: { "content-type": "multipart/form-data" }
		};

		axios.post("/api/upload", data, config).then(() => {
			this.setState({
				isLoading: false
			});
			// redirect
			console.log("redirect");
		});
	}

	renderLoading() {
		if (this.state.isLoading) {
			return (
				<div className="dropzone-loading-container">
					<img
						className="dropzone-loading-item-img"
						src={loading}
						alt="loading gif"
					/>
					<p className="dropzone-loading-item-text">
						{" "}
						converting your files{" "}
					</p>
				</div>
			);
			// return this.state.files.map(filename => (
			// 	<div key={filename} className="dropzone-files">
			// 		{filename}
			// 	</div>
			// ));
		}
		return <p>Arraste seu documento ou clique aqui!</p>;
	}

	render() {
		return (
			<div>
				<Dropzone
					style={theme}
					onDrop={this.handleDrop}
					className={
						this.state.isLoading ? "dropzone-active" : "dropzone"
					}
					activeClassName="dropzone-active"
					acceptClassName="dropzone-accept"
					// accept="application/vnd.ms-excel"
				>
					{this.renderLoading()}
				</Dropzone>
			</div>
		);
	}
}

export default Dashboard;
