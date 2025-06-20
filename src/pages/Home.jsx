import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard/Index'
import NavBar from '../components/NavBar/Index'
import { getPokemon } from '../functions/GetPokemons'
import {Box, Grid } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { getPokemonSpecies } from '../functions/GetDescription'
import Skeletons from '../components/Skeletons/Index'


export const Home = ({setPokemonData, setPokemonSpeciesData}) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsSpecies, setPokemonsSpecies] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        getPokemon().then(data => setPokemons(data.map(d => d)))
        .catch(err => console.log(err));
    },[])

    useEffect(() => {
        getPokemonSpecies().then(data => setPokemonsSpecies(data.map(d => d)))
        .catch(err => console.log(err));
    },[])

    const pokemonFilter = (name) =>{
        var filteredPokemons = [];
        if (name===""){
            getPokemon().then(data => setPokemons(data.map(d => d)))
            .catch(err => console.log(err));;
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }

    const pokemonPickHandler = (pokemonData) =>{
        setPokemonData(pokemonData)
        navigate("/profile")
    }
    const pokemonSpeciesPickHandler = (pokemonSpeciesData) =>{
        setPokemonSpeciesData(pokemonSpeciesData)
    }

 return (
  <div style={{ justifyContent: 'center', paddingBottom: '10px' }}>
    <NavBar pokemonFilter={pokemonFilter} hideSearch={false} />
    <Grid container justifyContent={'center'} spacing={2}>
      
      {pokemons.length === 0 && <Skeletons />}
      
      {pokemons.length > 0 && pokemons.map((pokemon, key) => {
        const speciesData = pokemonsSpecies.find(
          (specie) => specie.data.name === pokemon.data.name
        );

        return (
          <Grid item xs={3} key={key}>
            <Box
              onClick={() => {
                pokemonPickHandler(pokemon.data);
                pokemonSpeciesPickHandler(speciesData);
              }}
            >
              <PokemonCard
                id={pokemon.data.id}
                image={pokemon.data.sprites.front_default}
                name={pokemon.data.name}
                types={pokemon.data.types}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  </div>
)};
