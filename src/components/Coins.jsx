import React from "react"
import Coin from "./Coin"

export default function Coins(props) {
    return (
        <ul className="Coins">
            {props.suit.map((names, index) => {
                return <Coin names={names} flip={props.flips[index]} />;
            })}
        </ul>
    );
}
