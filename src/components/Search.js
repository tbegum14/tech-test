import { React, useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

export default function Search({ setSearchResults }) {
    const [value, setValue] = useState("")

	const handleInputChange = (event) => {
		setValue(event.target.value);
	};

    const handleSubmit = async (event) =>{
        event.preventDefault()
        setSearchResults(await getImages(value))
    }

	return (
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					className="search-input"
					type="text"
					onChange={handleInputChange}
				/>
				<button className="search-button" type="submit" >
					Search
				</button>
			</form>
	);
}
