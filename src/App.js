import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RatingState from "./components/RatingState";
import ThankYouState from "./components/ThankYouState";


function App() {
    const [selected, setSelected] = useState(null)

    return (
        <>
            <div className="App w-full h-screen flex items-center justify-center bg-DarrkBG font-overpass">
                {selected ? <ThankYouState selected={selected} /> :
                    <RatingState setSelected={setSelected} selected={selected} />
                }
            </div>
        </>



    );
}

export default App;