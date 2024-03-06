import React from 'react'
import { useState } from "react";
const Game = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
     })

    const handleClick = () => {
       setGame({...game,player: {...game.player, name: 'Luna'}}) ;
    }

    return (
        <div>
            <p>Player Name: {game.player.name}</p>
            <button onClick={handleClick }>change name</button>
        </div>
    )}
export default Game