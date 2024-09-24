import CharacterGallery from "../components/CharacterGallery.tsx";
import {characters} from "../Characters.ts";
import {useState} from "react";

export default function Characters() {

	const [searchText, setSearchText] = useState("");

	const filteredCharacters = characters
		.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

	return (
		<div>
			<h1>Characters</h1>
			<input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
			{
				filteredCharacters.length > 0
					? <CharacterGallery characters={filteredCharacters}/>
					: <p>No characters found</p>
			}
		</div>
	);
}