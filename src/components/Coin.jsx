import React from "react";

export default function Coin(props) {
    const name = props.names[0];
    const flip = props.flip;
    if (flip === 0) {
        return <li className="Coin-li"><img className="Coin-img"  src="coins/unknown.png" alt="Unflipped coin" /></li>
    } else {
        return <li className="Coin-li"><img className="Coin-img"  src={`coins/${name}-${props.names[flip]}.png`} alt={props.names[flip]}/></li>
    }
}