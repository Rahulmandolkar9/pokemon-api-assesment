import { useState} from "react";
import axios from "axios";
import './App.css';


function App() {

const [ pokemonName , setPokemonName] = useState('');
const [pokemonChosen , setPokemonChosen] = useState(false)
const [ pokemon , setPokemon] = useState({
 
  name : ' ' ,
  species : ' ' , 
  img : ' ' , 
  hp : ' ',
  attack :' ',
  defense :' ',
  types : ' '

});

const searchPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> {
    setPokemon ({ name : pokemonName ,
       species : response.data.name , 
       img : response.data.sprites.front_default , 
       hp : response.data.stats[0].base_stat,
       attack :response.data.stats[1].base_stat,
       defense :response.data.stats[2].base_stat,
       types : response.data.types[0].type.name,
    })
 
     setPokemonChosen(true)
  })

};

  

  return (
    <div className="App">
     <div className="TitleSection">
      <h1>Pokemon App</h1>
      <input type="text" onChange={(event)=>{setPokemonName(event.target.value);
      }} />
      <button onClick={searchPokemon}> Search Pokemon</button>
      </div>
      <div className="displaySection"> {!pokemonChosen ?( <h1> Please choose a Pokemon </h1>) :
         (
          <> 
          <h1>{pokemon.name} </h1>
         <img src={pokemon.img} alt='pokemon' />
         <h3>Species : {pokemon.species}</h3>
         <h3> Type : {pokemon.types}</h3>
         <h4>Hp : {pokemon.hp}</h4>
         <h4> Attack : {pokemon.attack}</h4>
         <h4> Defense : {pokemon.defense}</h4>
         </>
         )}
      
      </div>
    </div>
  );
}











export default App;
