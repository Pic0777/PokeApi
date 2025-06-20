import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const typeHandler = (types) =>{
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name
    }
    return types[0].type.name
  }

export default function PokemonTable({pokemonData, pokemonSpeciesData}) {
    const{height,weight,types} = pokemonData;
    const flavor_text = pokemonSpeciesData.data.flavor_text_entries[0].flavor_text
    const description = flavor_text.replace(/[\n\f]/g, ' ');

  return (
    <TableContainer component={Paper} sx={{width: 350}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', fontSize: '18px'}}>Altura(m)</TableCell>
            <TableCell sx={{fontSize: '18px'}}>{height/10} m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', fontSize: '18px'}}> Peso(Kg) </TableCell>
            <TableCell sx={{fontSize: '18px'}}>{weight/10} Kg</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', fontSize: '18px'}}> Tipo(s) </TableCell>
            <TableCell sx={{fontSize: '18px'}}>{typeHandler(types)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', fontSize: '18px'}}> Descrição </TableCell>
            <TableCell sx={{fontSize: '18px', textAlign: 'justify'}}>{description}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}