import React, { useState } from "react";
import "./App.css";
import Coins from "./Coins"

const elements = [
    ["wheelstar", "wheel", "star"],
    ["firewater", "fire", "water"],
    ["earthair", "earth", "air"],
    ["sunmoon", "sun", "moon"],
    ["starsvoid", "stars", "void"],
];

const arcana = [
    ["lanterneye", "lantern", "eye"],
    ["towertree", "tower", "tree"],
    ["acornriver", "acorn", "river"],
    ["chaincave", "chain", "cave"],
    ["coinkey", "coin", "key"],
];

const wild = [
    ["foolwise", "fool", "wise"]
]



function App() {
    const [flips, setFlips] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    function flip() {
        const flips = Array(11);
        for (let i = 0; i < flips.length; ++i) {
            flips[i] = Math.round(Math.random()) + 1;
        }
        setFlips(flips);
    }

    return (
        <div className="App">
            <div className="App-coinholder">
                <Coins suit={elements} flips={flips.slice(0, 5)}/>
                <Coins suit={arcana} flips={flips.slice(5, 10)}/>
                <Coins suit={wild} flips={flips.slice(10, 11)} />
            </div>
            <button onClick={flip}>
                Flip coins
            </button>
        </div>
        
    );
}

export default App;
