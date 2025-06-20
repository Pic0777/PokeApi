import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';


export default function PokemonCard({id, image, name,types}) {

  const typeHandler = () =>{
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name
    }
    return types[0].type.name
  }

  const colorHandler = () =>{
    switch (types[0].type.name) {
    case 'fire':
      return '#f57c00';
    case 'water':
      return 'blue';
    case 'grass':
      return 'green';
    case 'electric':
      return 'gold';
    case 'psychic':
      return 'purple';
    case 'ice':
      return 'lightblue';
    case 'rock':
      return 'gray';
    case 'ground':
      return 'sienna';
    case 'bug':
      return 'olive';
    case 'poison':
      return 'violet';
    case 'normal':
      return 'silver';
    case 'fighting':
      return 'darkred';
    case 'ghost':
      return 'indigo';
    case 'dark':
      return '#705848';
    case 'steel':
      return '#B8B8D0';
    case 'fairy':
      return 'pink';
    case 'dragon':
      return 'darkblue';
    case 'flying':
      return 'skyblue';
    default:
      return 'lightgray'; // cor padrão
  }
};

  const backgroundHandler = () =>{
    switch (types[0].type.name) {
    case 'fire':
      return 'url(assets/volcano_background.jpg)';
    case 'water':
      return 'url(assets/ocean_background.jpg)';
    case 'grass':
      return 'url(assets/forest_background.jpg)';
    case 'electric':
      return 'url(assets/electric_background.jpg)';
    case 'psychic':
      return 'url(assets/galaxy_background.jpg)';
    case 'ice':
      return 'url(assets/ice_background.jpg)';
    case 'rock':
      return 'url(assets/canions_background.jpg)';
    case 'ground':
      return 'url(assets/cave_background.jpg)';
    case 'bug':
      return 'url(assets/bugs_background.jpg)';
    case 'poison':
      return 'url(assets/toxic_background.jpg)';
    case 'normal':
      return 'url(assets/normal_background.jpg)';
    case 'fighting':
      return 'url(assets/dojo_background.jpg)';
    case 'ghost':
      return 'url(assets/lavander_background.jpg)';
    case 'dark':
      return 'url(assets/dark_background.jpg)';
    case 'steel':
      return 'url(assets/steel_background.jpg)';
    case 'fairy':
      return 'url(assets/fairy_background.jpg)';
    case 'dragon':
      return 'url(assets/dragon_background.jpg)';
    case 'flying':
      return 'url(assets/sky_background.jpg)';
    default:
      return 'lightgray'; // cor padrão
  }
};
    
  return (
    <Card sx={{ maxWidth: 345,maxHeight: 335 , backgroundColor: colorHandler(), padding: "10px" , transition: 0.3 , '&: hover':{transform: 'scale(1.05)'}}}>
      <CardActionArea sx={{width:180, color:"white",textAlign:'center'}}>
        <Chip label={id} sx={{marginBottom: "3%", fontSize: 20, color: 'white', cursor: 'default',pointerEvents: 'none'}}/>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          sx={{backgroundImage: backgroundHandler(),backgroundSize: 'cover',backgroundColor: "white", objectFit: "contain",}}
        />
        <CardContent sx={{textAlign: "center"}}>
            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "bold"}}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
            <Typography>
              {typeHandler()}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
