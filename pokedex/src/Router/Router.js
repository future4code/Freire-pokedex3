import React from 'react';
import {Home} from '../Pages/Home/Home';
import { Pokedex } from '../Pages/Pokedex/Pokedex';
import { Details } from '../Pages/Details/Details';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export const Router = () => {

return(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path={"/pokedex"} element={<Pokedex/>} />
            <Route path={"/details/:name"} element={<Details/>} />
        </Routes>
    
    </BrowserRouter>
)

}