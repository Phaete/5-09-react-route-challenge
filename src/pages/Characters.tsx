import CharacterGallery from "../components/CharacterGallery.tsx";
import {useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";

type CharacterGalleryProps = {
	characterList: Character[]
}
export default function Characters(characterGalleryProps: CharacterGalleryProps) {

	const [searchText, setSearchText] = useState("");

	const filteredCharacters = characterGalleryProps.characterList
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