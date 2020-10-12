import React from "react";

export default function Coin(props) {
    const name = props.names[0];
    const flip = props.flip;
    const result = props.names[flip]
    const formattedResult = result[0].toUpperCase() + result.slice(1);
    if (flip === 0) {
        return <li className="Coin-li"><img className="Coin-img"  src="coins/unknown.png" alt="Unflipped coin" title="Unflipped coin" /></li>
    } else {
        return <li className="Coin-li"><img className="Coin-img"  src={`coins/${name}-${result}.png`} alt={formattedResult} title={formattedResult}/></li>
    }
}