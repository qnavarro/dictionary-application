import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		console.log(response.data);
		setPhotos(response.data.photos);
	}

	function search() {
		// documentation:https://api.dictionaryapi.dev
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelsApiKey = "a002c7ba4b8d6faff3c087bcf141fto4";

		let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;

		axios.get(pexelsApiUrl).then(handlePexelsResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h1>What word do you want to look up?</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							onChange={handleKeywordChange}
							defaultValue={props.defaultKeyword}
						/>
					</form>
					<div className="hint">
						suggested keywords: galaxy, magic, robot...
					</div>
				</section>

				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "loading...";
	}
}
