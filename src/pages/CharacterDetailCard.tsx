import {useParams} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "../components/CharacterCard.tsx";

type CharacterDetailCardProps = {
	characterList : Character[]
}
export default function CharacterDetailCard (props : CharacterDetailCardProps) {
	const id : string | undefined = useParams().id

	const character : Character | undefined = props.characterList.find((character) => character.id.toString() === id)

	return (
		<div>
			<h2>
				{character?.name} - ID: {character?.id}
			</h2>
			{character && <CharacterCard character={character}/>}
		</div>
	)
}