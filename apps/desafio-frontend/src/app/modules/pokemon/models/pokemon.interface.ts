export interface IPokemonList {
    count: number;
    next: string;
    previous: string;
    results: IPokemonResults[];
  }
  
export interface IPokemonResults {
    name: string;
    url: string;
}
export interface IPokemon {
  abilities: IAbilities[];
  moves: IMoves;
  name: string;
  order: number;
  sprites: ISprites;
  types: ITypes[];
  favorite:boolean;
}

interface IAbilities {
  ability: IAbility;
}
interface IAbility{
  name: string;
}
interface ITypes {
  slot: number;
  type: IType;
}
interface IType{
  name:string
}

interface IMoves {
  move: string;
}

interface ISprites {
  front_default: string;
  back_default: string;
  front_female: string;
  back_famale: string;
}
