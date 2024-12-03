import { all_players } from "../data/players.js";
import {cards_of_players,add_to_terran,add_to_terran_like_GK,cards_of_players_after_filter,} from "../components/afichage.js";

export function el(id) {
  return document.getElementById(id);
}

export function setText(id, text) {
  el(id).textContent = text;
}
//////////////////// GET ELEMENT OF ADD FORM //////////////////////////////////
const form = document.querySelector("form");
let Name = el("name");
let url = el("url");
let pac = el("pac");
let pas = el("pas");
let phy = el("phy");
let drib = el("drib");
let def = el("def");
let flag = el("flag")
let club = el("club");
let consol_btn = el("consol_btn");
let sho = el("sho");
let logo = el("logo");
let position = el("position");
let country = el("country");
let div_form = el("form");
let gk_sho = el("gk_sho");
let gk_pac = el("gk_pac");
let gk_pas = el("gk_pas");
let gk_phy = el("gk_phy");
let gk_drib = el("gk_drib");
let gk_def = el("gk_def");

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
const new_country = el("new_country");
const edit_div_form = el("div_edit_form");
const edit_consol_btn = el("edit_consol_btn");

/////////////////////////////////// regex element /////////////////////////////

const name_regex = /^[A-Z a-z]*$/; 
const url_regex =  /^https?:\/\/[^\s$.?#].[^\s]*$/;
const stat_regex = /^[0-9][0-9]?$/;

/////////////////////// GET ELEMENT OF CHANGEMENT /////////////////////////////////////

// window.remove_mouseover = () =>{
//   console.log(this);
  
//  el('btn_suprime').classList.remove('hidden')
// }
// window.remove_mouseleave = () =>{
//   el('btn_suprime').classList.add('hidden')
// }
// window.remove_mouseover_gk = () =>{
//   el('btn_suprime_gk').classList.remove('hidden')
//  }
//  window.remove_mouseleave_gk = () =>{
//    el('btn_suprime_gk').classList.add('hidden')
//  }




/////////////////////////////////////////////////////////////////////
const changement = document.getElementById("changement");
const id = document.querySelectorAll(".position_of_player");
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
///////////////////////////////////////////////// function of validation of form with regex /////////////////////////////////

function regex(name_regex,url_regex,stat_regex,name,url,logo,pac,pas,phy,sho,drib,def){
  if (!name_regex.test(name)) {
    alert("player name should contain only letters and spaces ❗");
    return false;
  }
  if (!url_regex.test(url)) {
    alert("please enter a valid URL for the player photo ❗");
    return false;
  }
  if (!url_regex.test(logo)) {
    alert("please enter a valid URL for the player logo ❗");
    return;
  }
  if (!stat_regex.test(pac) || pac < 1 || pac > 100) {
    alert("pace must be a number between 1 and 100 ❗");
    return false ;
  }
  if (!stat_regex.test(pas) || pas < 1 || pas > 100) {
    alert("passing must be a number between 1 and 100 ❗");
    return false;
  }
  if (!stat_regex.test(phy) || phy < 1 || phy > 100) {
    alert("physical must be a number between 1 and 100 ❗");
    return false;
  }
  if (!stat_regex.test(sho) || sho < 1 || sho > 100) {
    alert("phooting must be a number between 1 and 100 ❗");
    return false;
  }
  if (!stat_regex.test(drib) || drib < 1 || drib > 100) {
    alert("pribbling must be a number between 1 and 100 ❗");
    return false;
  }
  if (!stat_regex.test(def) || def < 1 || def > 100) {
    alert("defending must be a number between 1 and 100 ❗");
    return false;
  }
  return true
}

/////////////////////// EDIT FUNCTION  ////////////////////////////////////

window.edit = (id) => {
  edit_div_form.classList.remove("hidden");
  const player = all_players[id - 1];

  new_Name.value = player.name;
  new_url.value = player.photo;
  new_logo.value = player.logo;
  new_country.value = player.nationality;
  new_flag.value = player.flag;
  new_club.value = player.club;
  if (player.position !== "GK") {
    new_pac.value = player.pace;
    new_pas.value = player.passing;
    new_phy.value = player.physical;
    new_drib.value = player.dribbling;
    new_def.value = player.defending;
    new_sho.value = player.shooting;
    
  } else {
   
    new_pac.value = player.diving;
    new_pas.value = player.handling;
    new_phy.value = player.kicking;
    new_drib.value = player.reflexes;
    new_def.value = player.speed;
    new_sho.value = player.positioning;
    
  }

  edit_form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault()
      player.name = new_Name.value;
      player.photo = new_url.value;
      player.logo = new_logo.value;
      player.country = new_country.value;
      player.flag = new_flag.value;
      player.club = new_club.value;
      
      if (player.position !== "GK") {
      player.pace = new_pac.value;
      player.passing = new_pas.value;
      player.physical = new_phy.value;
      player.passing = new_drib.value;
      player.defending = new_def.value;
      player.shooting = new_sho.value;
      }else{
      player.diving = new_pac.value;
      player.handling = new_pas.value;
      player.kicking = new_phy.value;
      player.reflexes = new_drib.value;
      player.speed = new_def.value;
      player.positioning = new_sho.value;
      }
      add_players_to_changement();
      edit_div_form.classList.add("hidden");
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




//////////////////////////////// function for add new player ////////////////////////////////////////
submit_data(all_players);

function submit_data(array) {
  let count = 27;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let player_name = Name.value;
    let player_url = url.value;
    let player_logo = logo.value;
    
    let player_position = position.value;
    let player_country = country.value;
    let player_flag = flag.value;
    let player_club = club.value;
    let player_def ;
    let player_pac ;
    let player_pas ;
    let player_phy ;
    let player_sho ;
    let player_drib ;

    if (position.value === "GK") {
    player_def = gk_def.value;
    player_pac = gk_pac.value;
    player_pas = gk_pas.value;
    player_phy = gk_phy.value;
    player_sho = gk_sho.value;
    player_drib = gk_drib.value;
       
    }
    else{
    player_def = def.value;
    player_pac = pac.value;
    player_pas = pas.value;
    player_phy = phy.value;
    player_sho = sho.value;
    player_drib = drib.value;
      
    }
    const validation_form = regex(name_regex,url_regex,stat_regex,player_name,player_url,player_logo,player_pac,player_pas,player_phy,player_sho,player_drib,player_def)
   if(!validation_form){
    return
   }
   let obg;
   if(position.value !== "GK"){
    obg = {
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
    };}
    else{
      obg = {
        id: count,
        name: player_name,
        photo: player_url,
        position: player_position,
        nationality: player_country,
        flag: player_flag,
        club: player_club,
        logo: player_logo,
        diving: player_pac,
        handling: player_sho,
        kicking: player_pas,
        reflexes: player_drib,
        speed: player_def,
        positioning: player_phy,
      };
    }
    console.log(obg);
    
    count++;
    array.push(obg);



    add_players_to_changement();

    Name.value = "";
    url.value = "";
    pac.value = "";
    pas.value = "";
    phy.value = "";
    drib.value = "";
    def.value = "";
    flag.value = "";
    club.value = "";
    sho.value = "";
    logo.value = "";
    position.value = "";
    country.value = "";
    
    gk_sho.value = "";
    gk_pac.value = "";
    gk_pas.value = "";
    gk_phy.value = "";
    gk_drib.value = "";
    gk_def.value = "";
    div_form.classList.toggle("hidden");
  });
}
