import React, { useContext } from "react";
import {TypeButton} from '../PokeTypes/styled'
import {GlobalContextState} from '../../Context/globalContextState'


function PokemonTypes () {
    const {pokeDetails} = useContext(GlobalContextState)
    return (
        <TypeButton>
            <img src='' alt=''/>
            <p>Planta</p>
        </TypeButton>
    )
}

export default PokemonTypes