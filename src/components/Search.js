import { React } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

export default function Search({ searchText, setSearchText }) {
	const handleInputChange = (event) => {
		setSearchText(event.target.value);
	};

    const handleSubmit = (event) =>{
        event.preventDefault()
        return getImages(searchText)
    }
	return (
		<>
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					className="search-input"
					type="text"
					onChange={handleInputChange}
					value={searchText}
				/>
				<button className="search-button" type="submit" >
					Search
				</button>
			</form>
		</>
	);
}
