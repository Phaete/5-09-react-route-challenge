import {Character} from "../types/RickAndMortyCharacter.ts";
import React from "react";

type CharacterCreatorProps = {
	character: Character
	setCharacter: (character: Character) => void
	characterList: Character[]
	setCharacterList: (characterList: Character[]) => void
}

export default function CharacterCreator(characterCreatorProps: CharacterCreatorProps) {

	const defaultChar: Character = {
		id: 0,
		name: "",
		status: "",
		species: "",
		type: "",
		gender: "",
		origin: {
			name: "",
			url: ""
		},
		location: {
			name: "",
			url: ""
		},
		image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
		episode: [],
		url: "",
		created: ""
	}

	function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newCharacter : Character = {
			...defaultChar,
			id: characterCreatorProps.characterList.length+1,
			name: event.target.value,
			status: characterCreatorProps.character.status,
			species: characterCreatorProps.character.species
		}
		characterCreatorProps.setCharacter(newCharacter)
	}

	function handleStatusChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newCharacter : Character = {
			...defaultChar,
			id: characterCreatorProps.characterList.length+1,
			name: characterCreatorProps.character.name,
			status: event.target.value,
			species: characterCreatorProps.character.species
		}
		characterCreatorProps.setCharacter(newCharacter)
	}

	function handleSpeciesChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newCharacter : Character = {
			...defaultChar,
			id: characterCreatorProps.characterList.length+1,
			name: characterCreatorProps.character.name,
			status: characterCreatorProps.character.status,
			species: event.target.value
		}
		characterCreatorProps.setCharacter(newCharacter)
	}

	function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
		event.preventDefault();
		characterCreatorProps.setCharacterList([...characterCreatorProps.characterList, characterCreatorProps.character])
		resetForm()
	}

	function resetForm(){
		characterCreatorProps.setCharacter({
			...defaultChar,
			id: characterCreatorProps.characterList.length,
		})
	}

	return (
		<div>
			<h1>Character Creator</h1>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input value={characterCreatorProps.character.name} onChange={handleNameChange} type="text" id="name" autoComplete={"off"}/>
				<label>Status:</label>
				<input value={characterCreatorProps.character.status} onChange={handleStatusChange} type="text" id="status" autoComplete={"off"}/>
				<label>Species:</label>
				<input value={characterCreatorProps.character.species} onChange={handleSpeciesChange} type="text" id="species" autoComplete={"off"}/>
				<button type="submit">Create Character</button>
			</form>
		</div>
	)
}