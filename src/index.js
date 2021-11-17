//Desestructuración

import { heroes } from "./bases/data/Heroes";

//import {} from './bases/data/Heroes'

/* const getHeroebyId=(id)=>{
    return heroes.find((heroe)=>{
        if(heroe.id=== id){
            return true;
        }else{
            return false;
        }
    });
} */

const getHeroebyId=(id)=>{
    return heroes.find((heroe)=> heroe.id===id);
}


console.log(getHeroebyId(5));