import React from "react";
import {TypeButton} from '../PokeTypes/styled'
import grass from '../../assets/img/type-vectors/grass.svg'


function PokemonTypes () {
    return (
        <TypeButton>
            <img src={grass} alt="grass"/>
            <p>Planta</p>
        </TypeButton>
    )
}

export default PokemonTypes