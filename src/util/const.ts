import axios from 'axios';
import { string } from 'yup';

export const Url:string ="https://pokeapi.co/api/v2/pokemon/"

export const FAVORITE_STORAGE = "favorito"

export const USER = {
  username:"admin",
  password:"123456"
}

export type TUserDectail = {
  name:string
   lastname:string
   username:string
   email:string
}
export const USER_DECTAIL = {
   name:"Angel ",
   lastname:"Bernechea",
   username:"PokemonMaster",
   email:"PokemonMaster@fakemail.com"
}

export async function evolution (id:number){
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`
  const data = await axios.get(url)
  const linksEvo = data.data.evolution_chain
  //const  realInfo = await evolutionPokemons(linksEvo)
  return "realInfo"
}

export async function evolutionPokemons (link:string){
  
  const data = await axios.get(link)
  return data.data
}


export const vista1 = {
  title:"",
  headerTransparent:true,
}

export type Colors = 
"normal"|
"fighting"|
"flying"|
"poison"|
"ground"|
"rock"|
"bug"|
"ghost"|
"steel"|
"fire"|
"water"|
"grass"|
"electric"|
"psychic"|
"ice"|
"dragon"|
"dark"|
"fairy"|
"hola";


export const POKEMON_TYPE_COLORS = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#FA6C6C",
  water: "#6890F0",
  grass: "#48CFB2",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

let pokemon:TPokemon 

//pokemon.moves[0].move.name

export interface TPokemon {
  abilities:                Ability[];
  base_experience:          number;
  forms:                    Species[];
  game_indices:             GameIndex[];
  height:                   number;
  held_items:               HeldItem[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  past_types:               any[];
  species:                  Species;
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export interface Ability {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

export interface Species {
  name: string;
  url:  string;
}

export interface GameIndex {
  game_index: number;
  version:    Species;
}

export interface HeldItem {
  item:            Species;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity:  number;
  version: Species;
}

export interface Move {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: Species;
  version_group:     Species;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl":        Sprites;
  "heartgold-soulsilver": Sprites;
  platinum:               Sprites;
}

export interface Versions {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Sprites {
  back_default:       string;
  back_female:        string;
  back_shiny:         string;
  back_shiny_female:  string;
  front_default:      string;
  front_female:       string;
  front_shiny:        string;
  front_shiny_female: string;
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

export interface RedBlue {
  back_default:      string;
  back_gray:         string;
  back_transparent:  string;
  front_default:     string;
  front_gray:        string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold:    Gold;
  silver:  Gold;
}

export interface Crystal {
  back_default:            string;
  back_shiny:              string;
  back_shiny_transparent:  string;
  back_transparent:        string;
  front_default:           string;
  front_shiny:             string;
  front_shiny_transparent: string;
  front_transparent:       string;
}

export interface Gold {
  back_default:       string;
  back_shiny:         string;
  front_default:      string;
  front_shiny:        string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald:             OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire":     Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny:   string;
}

export interface Home {
  front_default:      string;
  front_female:       string;
  front_shiny:        string;
  front_shiny_female: string;
}

export interface GenerationVii {
  icons:                  DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female:  null | string;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot: number;
  type: Species;
}
