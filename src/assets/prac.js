import React from 'react'
import { useStateValue } from './stateProvider'

function Prac() {

    const [{ myPlayerData, playerData, coachesData }, dispatch] = useStateValue();


    return (
        <div>
         {myPlayerData.map(player => <p>{player.firstName}</p>)}
            
        </div>
    )
}

export default Prac
