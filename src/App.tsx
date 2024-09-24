import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import Characters from "./pages/Characters.tsx";
import Header from "./components/Header/Header.tsx";
import CharacterDetailCard from "./pages/CharacterDetailCard.tsx";
import {characters} from "./Characters.ts";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Homepage />}/>
                <Route path={"/characters"} element={<Characters />}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard characterList={characters} />}/>
            </Routes>
        </>
    );
}
