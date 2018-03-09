import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import Table from "../Table/Table";

import "./search.css";

const theme = {
	container: "container",
	containerOpen: "containerOpen",
	input: "input",
	inputOpen: "inputOpen",
	inputFocused: "inputFocused",
	suggestionsContainer:     'suggestionsContainer',
	suggestionsList: "suggestionsList",
	suggestion: "suggestion",
	suggestionHighlighted: "suggestionHighlighted"
};

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => <span>{suggestion}</span>;

class Search extends Component {
	constructor() {
		super();

		this.state = {
			value: "",
			suggestions: [],
			result_json: []
		};
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	onSuggestionsFetchRequested = ({ value }) => {
		axios
			.get("/api/search", {
				params: {
					value: value
				}
			})
			.then(suggestions => {
				this.setState({
					suggestions: suggestions.data
				});
			});
	};

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
		axios
			.get("/api/merge", {
				params: {
					value: suggestion
				}
			})
			.then(res => {
				this.setState({
					result_json: res.data
				})
			});
	};

	render() {
		const { value, suggestions } = this.state;

		const inputProps = {
			placeholder: "Type your identifier",
			value,
			onChange: this.onChange
		};

		return (
			<div>
				<Autosuggest
					theme={theme}
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					onSuggestionSelected={this.onSuggestionSelected}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
				/>

				<Table result_json={this.state.result_json}/>
			</div>
		);
	}
}

export default Search;
