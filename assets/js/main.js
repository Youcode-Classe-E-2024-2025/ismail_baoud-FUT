import { all_players } from "./form.js";
import { get_arr } from "./form.js";


import {inner} from "../components/afichage.js"
import {innerfilter, add_aj} from "../components/afichage.js"
const changement = document.getElementById('changement');
const id = document.querySelectorAll('.s');

export function el(id){
    return document.getElementById(id)
}
export function setText(id, text) {
  document.getElementById(id).textContent = text;
}

let pos;
let data_id;
let data_target;
id.forEach(elem =>{
        elem.addEventListener('click', function(){
          pos = this.id;
          console.log(pos);
          
          data_id = this.getAttribute('data-id');
          console.log(data_id);
          
          data_target = document.querySelector(`[data-id="${data_id}"]`);
          data_target.innerHTML = "";
          console.log(elem);
          filter_players(all_players);
})
})



add_players_to_changement();



function add_players_to_changement(){
  const new_arr = get_arr()
  new_arr.forEach(element => {
    inner(changement,element);
});

}


function filter_players(arr){
  window.add = (id) => {
    let player_id = id;
    console.log(player_id);

   let player =  arr[id - 1];
   add_aj(data_target,player);
      const elem = document.getElementById(`div_change${player.name}`);
      elem.remove();
      

  }
  const POSITION = arr.filter(el=>el.position === pos);
   changement.innerHTML = ""
  POSITION.forEach(element => {
   

    innerfilter(changement,element);
  
  })
 
    

  
}