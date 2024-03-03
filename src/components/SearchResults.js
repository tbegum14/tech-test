import React from "react";
import "../styles/searchResults.css";

export default function SearchResults({ results }) {
	if (!results.length) {
		return <p className="title">No images</p>;
	} else {
		const resultImages = results.map((image) => {
			return <img className="card-image" src={image} alt="" />;
		});
		return (
			<>
				<p className="title">Search Results</p>
				<div className="card-image-container">{resultImages}</div>
			</>
		);
	}
}
