import { all_players } from "../components/afichage.js";
import {cards_of_players,add_to_terran,add_to_terran_like_GK,cards_of_players_after_filter,} from "../components/afichage.js";

export function el(id) {
  return document.getElementById(id);
}

export function setText(id, text) {
  el(id).textContent = text;
}
//////////////////// GET ELEMENT OF ADD FORM //////////////////////////////////
const form = document.querySelector("form");
const Name = el("name");
const url = el("url");
const pac = el("pac");
const pas = el("pas");
const phy = el("phy");
const drib = el("drib");
const def = el("def");
const consol_btn = el("consol_btn");
const sho = el("sho");
const logo = el("logo");
const position = el("position");
const country = el("country");
const div_form = el("form");

/////////////////////// GET ELEMENT OF EDIT FORM /////////////////////////////////////

const edit_form = el("edit_form");
const new_Name = el("new_name");
const new_url = el("new_url");
const new_pac = el("new_pac");
const new_pas = el("new_pas");
const new_phy = el("new_phy");
const new_drib = el("new_drib");
const new_def = el("new_def");
const new_sho = el("new_sho");
const new_logo = el("new_logo");
const new_flag = el("new_flag");
const new_club = el("new_club");
const new_position = el("new_position");
const new_country = el("new_country");
const edit_div_form = el("div_edit_form");
const edit_consol_btn = el("edit_consol_btn");

/////////////////////////////////// regex element /////////////////////////////

const name_regex = /^[A-Za-z\s]+$/; 
const url_regex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-_.?&%=]*)*$/;
const stat_regex = /^\d+$/;

/////////////////////// GET ELEMENT OF CHANGEMENT /////////////////////////////////////

const changement = document.getElementById("changement");
const id = document.querySelectorAll(".scale");
//////////////////////// BURGER MENU //////////////////////////////

const menu =  document.querySelectorAll(".menu");

const menu_elem = el("menu_elem")
menu.forEach(element => {
  element.addEventListener('click',()=>{
    menu_elem.classList.toggle('hidden')
})})

//////////////////////// ADD EVENTS LISTNER FOR BUTTONS //////////////////////////
consol_btn.addEventListener("click", () => {
  div_form.classList.toggle("hidden");
});
edit_consol_btn.addEventListener("click", () => {
  edit_div_form.classList.toggle("hidden");
});

el("btn_ajout").addEventListener("click", () => {
  div_form.classList.toggle("hidden");
});

///////////////////////// DELET FUNCTION ///////////////////////////////////
let inner_img;
window.delet = (id) => {
  if (typeof id === "number") {
    const index_player = all_players.findIndex((player) => player.id === id);
    all_players.splice(index_player, 1);

    add_players_to_changement();
  } else {
    inner_img = id.parentElement;
    
    id.remove();
    inner_img.innerHTML = `<img class="empty_card w-[90%] m-aut" src="./assets/images/card_player.png" alt="">`;
  }
};

/////////////////////// EDIT FUNCTION  ////////////////////////////////////

window.edit = (id) => {
  edit_div_form.classList.toggle("hidden");

  const player = all_players[id - 1];
  if (player.position !== "GK") {
    new_Name.value = player.name;
    new_url.value = player.photo;
    new_pac.value = player.pace;
    new_pas.value = player.passing;
    new_phy.value = player.physical;
    new_drib.value = player.dribbling;
    new_def.value = player.defending;
    new_sho.value = player.shooting;
    new_logo.value = player.logo;
    new_position.value = player.position;
    new_country.value = player.nationality;
    new_flag.value = player.flag;
    new_club.value = player.club;
  } else {
    new_Name.value = player.name;
    new_url.value = player.photo;
    new_pac.value = player.pace;
    new_pas.value = player.pas;
    new_phy.value = player.phy;
    new_drib.value = player.drib;
    new_def.value = player.def;
    new_sho.value = player.sho;
    new_logo.value = player.logo;
    new_position.value = player.position;
    new_country.value = player.nationality;
    new_flag.value = player.flag;
    new_club.value = player.club;
  }

  edit_form.addEventListener(
    "submit",
    (e) => {
      
      regex(name_regex,url_regex,stat_regex,new_Name.value,new_url.value,new_logo.value,new_pac.value,new_pas.value,new_phy.value,new_sho.value,new_drib.value,new_def.value)


      player.name = new_Name.value;
      player.photo = new_url.value;
      player.pace = new_pac.value;
      player.passing = new_pas.value;
      player.physical = new_phy.value;
      player.passing = new_drib.value;
      player.defending = new_def.value;
      player.shooting = new_sho.value;
      player.logo = new_logo.value;
      player.position = new_position.value;
      player.country = new_country.value;
      player.flag = new_flag.value;
      player.club = new_club.value;


      add_players_to_changement();
      edit_div_form.classList.toggle("hidden");
    }
    ,{ once: true }
  );
};

////////////////////////////////////////////  get the place of set this player and id of position /////////////////////

let click_position;
let data_id;
let data_target;
id.forEach((elem) => {
  elem.addEventListener("click", function () {
    click_position = this.id;

    data_id = this.getAttribute("data-id");

    data_target = document.querySelector(`[data-id="${data_id}"]`);

    filter_players(all_players);
  });
});



///////////////////////////////////// function of filter /////////////////////////////////////
let add_class;
let plays;
function filter_players(arr) {
  window.add = (id) => {
    let player = arr[id - 1];

     plays = Array.from(document.querySelectorAll(".play"));

     if (plays.length > 0) {
      
     
    const isExist = plays.find(
      (el) => {
        return el.getAttribute("data-id") == player.id
      }
    );
    
    if (isExist) {
      alert("this player is already exist in the squad ! please select another one .");
    } else {
      if (click_position !== "GK") {
        add_to_terran(data_target, player);
        add_to_terran(data_target, player);
        let _id = data_target.getAttribute('data-id');
        add_class = document.querySelector(`[data-id="${_id}"]`)
        add_class.firstChild.classList.add('play')
      } else {
        add_to_terran_like_GK(data_target, player);
        
      }
    }
  }else{

    if (click_position !== "GK") {
      add_to_terran(data_target, player);
      let _id = data_target.getAttribute('data-id');
      add_class = document.querySelector(`[data-id="${_id}"]`)
      add_class.firstChild.classList.add('play')
    } else {
      add_to_terran_like_GK(data_target, player);
    }
  }
  };
  const POSITION = arr.filter((el) => el.position === click_position);

  changement.innerHTML = "";
  POSITION.forEach((element) => {
    changement.innerHTML += cards_of_players_after_filter(element);
  });
}



//////////////////////////////// function of change property of players if gk or no ////////////

document.getElementById('position').addEventListener('change', function () {
  const position = this.value;
  const playerSection = document.getElementById('player');
  const gkSection = document.getElementById('gk_player');

  if (position === 'GK') {
    playerSection.classList.add('hidden');
    gkSection.classList.remove('hidden');
  } else {
    playerSection.classList.remove('hidden');
    gkSection.classList.add('hidden');
  }
});

///////////////////////////////// function of display players ///////////////////////////// 
el("all_players").addEventListener("click", () => {
  add_players_to_changement();
});

add_players_to_changement();

function add_players_to_changement() {
  changement.innerHTML = "";
  all_players.forEach((element) => {
    changement.innerHTML += cards_of_players(element);
  });
}

///////////////////////////////////////////////// function of validation of form with regex /////////////////////////////////

function regex(name_regex,url_regex,stat_regex,name,url,logo,pac,pas,phy,sho,drib,def){
  if (!name_regex.test(name)) {
    alert("player name should contain only letters and spaces.");
    return false;
  }
  if (!url_regex.test(url)) {
    alert("please enter a valid URL for the player photo.");
    return false;
  }
  if (!url_regex.test(logo)) {
    alert("please enter a valid URL for the player logo.");
    return;
  }
  if (!stat_regex.test(pac) || pac < 1 || pac > 100) {
    alert("pace must be a number between 1 and 100.");
    return false ;
  }
  if (!stat_regex.test(pas) || pas < 1 || pas > 100) {
    alert("passing must be a number between 1 and 100.");
    return false;
  }
  if (!stat_regex.test(phy) || phy < 1 || phy > 100) {
    alert("physical must be a number between 1 and 100.");
    return false;
  }
  if (!stat_regex.test(sho) || sho < 1 || sho > 100) {
    alert("phooting must be a number between 1 and 100.");
    return false;
  }
  if (!stat_regex.test(drib) || drib < 1 || drib > 100) {
    alert("pribbling must be a number between 1 and 100.");
    return false;
  }
  if (!stat_regex.test(def) || def < 1 || def > 100) {
    alert("defending must be a number between 1 and 100.");
    return false;
  }
  return true
}


//////////////////////////////// function for add new player ////////////////////////////////////////
submit_data(all_players);

function submit_data(array) {
  let count = 27;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const player_name = Name.value;
    const player_url = url.value;
    const player_logo = logo.value;
    const player_pac = pac.value;
    const player_pas = pas.value;
    const player_phy = phy.value;
    const player_sho = sho.value;
    const player_position = position.value;
    const player_country = country.value;
    const player_flag = flag.value;
    const player_club = club.value;
    const player_drib = drib.value;
    const player_def = def.value;

    const validation_form = regex(name_regex,url_regex,stat_regex,player_name,player_url,player_logo,player_pac,player_pas,player_phy,player_sho,player_drib,player_def)
   if(!validation_form){
    return;
   }
    const obg = {
      id: count,
      name: player_name,
      photo: player_url,
      position: player_position,
      nationality: player_country,
      flag: player_flag,
      club: player_club,
      logo: player_logo,
      pace: player_pac,
      shooting: player_sho,
      passing: player_pas,
      dribbling: player_drib,
      defending: player_def,
      physical: player_phy,
    };
    count++;
    array.push(obg);

    add_players_to_changement();
    div_form.classList.toggle("hidden");
  });
}
