import React from "react";
import "../styles/searchResults.css";

export default function SearchResults({ results }) {
	if (!results.length) {
		return <p>Nothing here</p>;
	} else {
		const resultImages = results.map((image) => {
			return <img className="card-image" src={image} alt="" />;
		});
		return (
			<>
				<p>Search Results</p>
				{resultImages}
			</>
		);
	}
}
