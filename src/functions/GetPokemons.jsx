import axios from "axios";

export async function getPokemon() {
    var endpoints = [];
    for (var i = 1; i <=151; i ++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    var response = axios.all(endpoints.map(endpoint => axios.get(endpoint) ))
    return response
    
}