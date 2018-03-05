import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

import "./search.css";

const theme = {
	container: "container",
	containerOpen: "containerOpen",
	input: "input",
	inputOpen: "inputOpen",
	inputFocused: "inputFocused",
	// suggestionsContainer:     'suggestionsContainer',
	// suggestionsContainerOpen: 'suggestionsContainerOpen',
	suggestionsList: "suggestionsList",
	suggestion: "suggestion",
	// suggestionFirst:          'suggestionFirst',
	suggestionHighlighted: "suggestionHighlighted"
	// sectionContainer:         'sectionContainer',
	// sectionContainerFirst:    'sectionContainerFirst',
	// sectionTitle:             'sectionTitle'
};


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <span>{suggestion}</span>;

class Search extends React.Component {
	constructor() {
		super();

		// Autosuggest is a controlled component.
		// This means that you need to provide an input value
		// and an onChange handler that updates this value (see below).
		// Suggestions also need to be provided to the Autosuggest,
		// and they are initially empty because the Autosuggest is closed.
		this.state = {
			value: "",
			suggestions: []
		};
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		axios.get('/api/search', {
			params: {
				value: value
			}
		}).then((suggestions) => {
				this.setState({
					suggestions: suggestions.data 
				});
			}
		)

	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	render() {
		const { value, suggestions } = this.state;

		// Autosuggest will pass through all these props to the input.
		const inputProps = {
			placeholder: "Type your identifier",
			value,
			onChange: this.onChange
		};

		// Finally, render it!
		return (
			<Autosuggest
				theme={theme}
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
			/>
		);
	}
}

export default Search;
