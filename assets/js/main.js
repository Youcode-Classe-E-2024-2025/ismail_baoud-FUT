
// const terran = document.getElementById("terran");
const changement = document.getElementById('changement');
const id = document.querySelectorAll('.s');
import {inner} from "../components/afichage.js"

export function el(id){
    return document.getElementById(id)
}
let allPlayers=[];
export function setText(id, text) {
  document.getElementById(id).textContent = text;
}

let pos;
let data_id;
let data_x;
// export function el(id_or_class_or_elementTagName) {
//   return document.querySelector(id_or_class_or_elementTagName);
// }
fetch("assets/data/players.json")
  .then((res) => res.json())
  .then((data) => {
    allPlayers = data.players;
    console.log(allPlayers);
    
    
  
    id.forEach(elem =>{
      elem.addEventListener('click', function(){
        pos = this.id;
        data_id = this.getAttribute('data-id');
        console.log(data_id);
        
        data_x = document.querySelector(`[data-id="${data_id}"]`);
        data_x.innerHTML = "";
        
        
        
        
        GK_players(allPlayers)
      })
      
      });
    
      add_players_to_changement(allPlayers)

    
  })
  .catch((error) => console.log(error));


function add_players_to_changement(array){
  
  array.forEach(element => {
    inner(changement,element);
  });
}

function GK_players(arr){
 
  const POSITION = arr.filter(el=>el.position === pos);
  changement.innerHTML = "";
  POSITION.forEach(element => {
    console.log(element);
    
      inner(changement,element)

      inner(data_x,element)
  });
}




