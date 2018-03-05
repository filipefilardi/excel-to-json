import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

import loading from "./loading.gif";
import json_icon from "./json_icon.png";
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
			files: [],
			json: []
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

		axios.post("/api/upload", data, config).then(converted_files => {
			console.log(converted_files.data);
			this.setState({
				isLoading: false,
				json: converted_files.data
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
		}
		return <p>Arraste seu documento ou clique aqui!</p>;
	}

	renderJsonFiles() {
		if(this.state.json.length === 0){
			return ""
		}

		return (
			<div>
				<div className="title">download your converted json</div>
				<div className="download-container">
					{this.state.json.map(converted_file => ( 
						<div key={converted_file} className="json-container">
							<img
								src={json_icon}
								alt="json_icon"
								className="json-img"
							/>
							<a download={converted_file + ".json"}
								href={"/api/download?filename=" + converted_file}
								className="json-link"
							>	
								{converted_file}								
							</a>
						</div>
					))}
				</div>
			</div>
		);
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

				{this.renderJsonFiles()}	
			</div>
		);
	}
}

export default Dashboard;
