import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from "axios";

class Dashboard extends Component {
	
	constructor(props) {
		super(props);

		this.handleDrop = this.handleDrop.bind(this)
	}

	handleDrop(files) {
		let data = new FormData();

        for (var i = 0; i < files.length; i++) {
            // console.log(files[i])
            let file = files[i];
            data.append("file", file)
            // data.append('file[' + i + ']', file, file.name);
        }
 
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
		// console.log(files);
		axios.post("/api/upload", data, config);
	}

	render() {
		return (
			<div>
				<Dropzone 
					onDrop={this.handleDrop}
					// accept="application/vnd.ms-excel"
				>
				Clique ou arraste aqui
				</Dropzone>
			</div>
		);
	}
}

export default Dashboard;
