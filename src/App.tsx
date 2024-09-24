import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import Characters from "./pages/Characters.tsx";
import Header from "./components/Header/Header.tsx";
import CharacterDetailCard from "./pages/CharacterDetailCard.tsx";
import {characters} from "./Characters.ts";
import CharacterCreator from "./pages/CharacterCreator.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {useState} from "react";

export default function App() {

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

    const [characterList, setCharacterList] = useState<Character[]>(characters);
    const [character, setCharacter] = useState<Character>(defaultChar);

    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Homepage />}/>
                <Route path={"/characters"} element={<Characters characterList={characterList}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard characterList={characterList} />}/>
                <Route path={"/characters/creator"} element={<CharacterCreator character={character} setCharacter={setCharacter} characterList={characterList} setCharacterList={setCharacterList}/>}/>
            </Routes>
        </>
    );
}
