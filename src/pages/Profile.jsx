import React, { useEffect } from "react";
import NavBar from "../components/NavBar/Index";
import PokemonTable from "../components/Table/Index";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";


export const Profile = ({ pokemonData, pokemonSpeciesData }) => {
  const navigate = useNavigate()

  useEffect(() =>{
    if (pokemonData === undefined){
        navigate('/')
    }
  })

  if(!pokemonData){
    return undefined
  }
  return (
    <>
      <NavBar hideSearch={true} />
    
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
          width={"300px"}
        />
        <PokemonTable pokemonData={pokemonData} pokemonSpeciesData={pokemonSpeciesData}/>
      </Box>
      <Divider>Variações</Divider>
      <Box display={"flex"} sx={{ justifyContent: "center" }}>
        {pokemonData.sprites.front_female && (
          <Box
            component="img"
            src={pokemonData.sprites.front_female}
            width={"200px"}
          />
        )}
        {pokemonData.sprites.front_shiny && (
          <Box
            component="img"
            src={pokemonData.sprites.front_shiny}
            width={"200px"}
          />
        )}
        {pokemonData.sprites.front_shiny_female && (
          <Box
            component="img"
            src={pokemonData.sprites.front_shiny_female}
            width={"200px"}
          />
        )}
      </Box>
      <Divider>Golpes</Divider>
      <Box textAlign={"justify"} marginTop={'5px'} padding={"5%"}>
        {pokemonData.moves.map((moveData) => <Chip sx={{margin: '5px', fontWeight: 'bold'}} label={moveData.move.name} onClick={() => {}}/>)}
      </Box>

    </>
  );
};
