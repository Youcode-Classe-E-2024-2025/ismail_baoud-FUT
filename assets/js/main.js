let all_players = [
  {
    id: 1,
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65,
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77,
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://static.cdnlogo.com/logos/m/5/manchester-city-fc.svg",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78,
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77,
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86,
  },
  {
    id: 6,
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86,
  },
  {
    id: 7,
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61,
  },
  {
    id: 8,
    name: "Mohamed Salah",
    photo: "https://cdn.sofifa.net/players/209/331/25_240.png",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75,
  },
  {
    id: 9,
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81,
  },
  {
    id: 10,
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    id: 11,
    name: "Luka Modrić",
    photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
    position: "CM",
    nationality: "Croatia",
    flag: "https://cdn.sofifa.net/flags/hr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 74,
    shooting: 78,
    passing: 89,
    dribbling: 90,
    defending: 72,
    physical: 65,
  },
  {
    id: 12,
    name: "Vinicius Junior",
    photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 89,
    pace: 91,
    shooting: 88,
    passing: 85,
    dribbling: 94,
    defending: 39,
    physical: 61,
  },
  {
    id: 13,
    name: "Brahim Diáz",
    photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
    position: "LW",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 82,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 85,
    defending: 31,
    physical: 56,
  },
  {
    id: 14,
    name: "Karim Benzema",
    photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 90,
    pace: 77,
    shooting: 90,
    passing: 83,
    dribbling: 88,
    defending: 40,
    physical: 78,
  },
  {
    id: 15,
    name: "Erling Haaland",
    photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    position: "ST",
    nationality: "Norway",
    flag: "https://cdn.sofifa.net/flags/no.png",
    club: "Manchester City",
    logo: "https://static.cdnlogo.com/logos/m/5/manchester-city-fc.svg",
    rating: 91,
    pace: 89,
    shooting: 94,
    passing: 65,
    dribbling: 80,
    defending: 45,
    physical: 88,
  },
  {
    id: 16,
    name: "N'Golo Kanté",
    photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
    position: "CM",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 87,
    pace: 77,
    shooting: 66,
    passing: 75,
    dribbling: 82,
    defending: 88,
    physical: 82,
  },
  {
    id: 17,
    name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77,
  },
  {
    id: 18,
    name: "Yassine Bounou",
    photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
    position: "GK",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 84,
    diving: 81,
    handling: 82,
    kicking: 77,
    reflexes: 86,
    speed: 38,
    positioning: 83,
  },
  {
    id: 19,
    name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77,
  },
  {
    id: 20,
    name: "Jadon Sancho",
    photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
    position: "LW",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 84,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 88,
    defending: 34,
    physical: 63,
  },
  {
    id: 21,
    name: "T.Alexander-Arnold",
    photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
    position: "RB",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Liverpool",
    logo: "https://static.cdnlogo.com/logos/l/92/liverpool-fc.svg",
    rating: 87,
    pace: 76,
    shooting: 66,
    passing: 89,
    dribbling: 80,
    defending: 79,
    physical: 71,
  },
  {
    id: 22,
    name: "Achraf Hakimi",
    photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
    position: "RB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 84,
    pace: 91,
    shooting: 76,
    passing: 80,
    dribbling: 80,
    defending: 75,
    physical: 78,
  },
  {
    id: 23,
    name: "Youssef En-Nesyri",
    photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
    position: "ST",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Fenerbahçe",
    logo: "https://cdn.sofifa.net/meta/team/88/120.png",
    rating: 83,
    pace: 82,
    shooting: 82,
    passing: 63,
    dribbling: 77,
    defending: 36,
    physical: 80,
  },
  {
    id: 24,
    name: "Noussair Mazraoui",
    photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
    position: "LB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 81,
    pace: 78,
    shooting: 66,
    passing: 77,
    dribbling: 83,
    defending: 77,
    physical: 71,
  },
  {
    id: 25,
    name: "Ismael Saibari",
    photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
    position: "CM",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "PSV",
    logo: "https://cdn.sofifa.net/meta/team/682/120.png",
    rating: 83,
    pace: 89,
    shooting: 78,
    passing: 80,
    dribbling: 86,
    defending: 55,
    physical: 84,
  },
  {
    id: 26,
    name: "Gianluigi Donnarumma",
    photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
    position: "GK",
    nationality: "Italy",
    flag: "https://cdn.sofifa.net/flags/it.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 89,
    diving: 88,
    handling: 83,
    kicking: 75,
    reflexes: 90,
    speed: 50,
    positioning: 85,
  },
];
// export function get_arr(){
export function el(id) {
  return document.getElementById(id);
}
//   return JSON.parse(localStorage.getItem("Players"))
// }
// up_local(all_players)
// export function up_local(arr){
//   localStorage.setItem("Players",JSON.stringify(arr))
// }
const hi = document.querySelectorAll('.hid')
hi.forEach(element => {
  console.log(element);
  
});
  

const form = document.querySelector("form");
const Name = el("name");
const url = el("url");
const pac = el("pac");
const pas = el("pas");
const phy = el("phy");
const drib = el("drib");
const def = el("def");
const consol_btn = el("consol_btn");
const edit_consol_btn = el("edit_consol_btn");

const sho = el("sho");
const logo = el("logo");
const position = el("position");
const country = el("country");
const div_form = el("form");

////////////////////////////////////////////////////////////

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
const new_div_form = el("div_edit_form");

// import {inner} from "../components/afichage.js"
import {
  cards_of_players,
  add_to_terran,
  add_to_terran_like_GK,
  cards_of_players_after_filter,
} from "../components/afichage.js";
const changement = document.getElementById("changement");
const id = document.querySelectorAll(".scale");
// const delet_btn = document.getElementById('delet_btn');

export function setText(id, text) {
  el(id).textContent = text;
}


consol_btn.addEventListener("click", () => {
  div_form.classList.toggle("hidden");
});
edit_consol_btn.addEventListener("click", () => {
  new_div_form.classList.toggle("hidden");
});

el("btn_ajout").addEventListener("click", () => {
  div_form.classList.toggle("hidden");
});
let plays;
let inner_img;
window.delet = (id) => {
  console.log(id, typeof id);
  if (typeof id === "number") {
    const index_player = all_players.findIndex((player) => player.id === id);
    all_players.splice(index_player, 1);

    add_players_to_changement();
  } else {
    // id.classList.remove('play')
    // id.innerHTML = "";
    inner_img = id.parentElement;
    console.log(inner_img);
    
    id.remove();
    inner_img.innerHTML = `<img class="plus w-12 m-auto" src="./assets/images/plus1.png" alt="">`;
  }
};

window.edit = (id) => {
  new_div_form.classList.toggle("hidden");

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
    new_url.value = player.url;
    new_pac.value = player.pace;
    new_pas.value = player.pas;
    new_phy.value = player.phy;
    new_drib.value = player.drib;
    new_def.value = player.def;
    new_sho.value = player.sho;
    new_logo.value = player.logo;
    new_position.value = player.position;
    new_country.value = player.country;
    new_flag.value = player.flag;
    new_club.value = player.club;
  }

  edit_form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();

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
      new_div_form.classList.toggle("hidden");
    },
    { once: true }
  );
};

let pos;
let data_id;
let data_target;
id.forEach((elem) => {
  elem.addEventListener("click", function () {
    pos = this.id;

    data_id = this.getAttribute("data-id");

    data_target = document.querySelector(`[data-id="${data_id}"]`);

    filter_players(all_players);
  });
});

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
let add_class;
function filter_players(arr) {
  window.add = (id) => {
    let player = arr[id - 1];

    // let id_data;
     plays = Array.from(document.querySelectorAll(".play"));
    //  console.log(plays);
     if (plays.length > 0) {
      
     
    const isExist = plays.find(
      (el) => {
        console.log(id, el.getAttribute("data-id"));
        return el.getAttribute("data-id") == player.id
      }
    );
    console.log(isExist);
    
    if (isExist) {
      alert("this player is already exist in the squad ! please select another one .");
    } else {
      if (pos !== "GK") {
        add_to_terran(data_target, player);
        add_to_terran(data_target, player);
        let _id = data_target.getAttribute('data-id');
        add_class = document.querySelector(`[data-id="${_id}"]`)
        add_class.firstChild.classList.add('play')
        console.log(plays);
        
        // console.log();
      // add_class.firstChild.classList.('play')

        // plays = document.querySelectorAll(".play");
      } else {
        add_to_terran_like_GK(data_target, player);
        
      }
    }
  }else{

    if (pos !== "GK") {
      add_to_terran(data_target, player);
      let _id = data_target.getAttribute('data-id');
      add_class = document.querySelector(`[data-id="${_id}"]`)
      add_class.firstChild.classList.add('play')
      console.log();
      console.log(plays);

    //  plays = document.querySelectorAll(".play");
    } else {
      add_to_terran_like_GK(data_target, player);
    }
  }
    // const elem = document.getElementById(`div_change${player.name}`);
    // elem.remove();
  };
  const POSITION = arr.filter((el) => el.position === pos);

  changement.innerHTML = "";
  POSITION.forEach((element) => {
    changement.innerHTML += cards_of_players_after_filter(element);
  });
}
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


    const name_regex = /^[A-Za-z\s]+$/; 
    const url_regex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-_.?&%=]*)*$/;
    const stat_regex = /^\d+$/;
    const rating_regex = /^(?:[1-9]?[0-9]|100)$/;
    if (!name_regex.test(player_name)) {
      alert("Player name should contain only letters and spaces.");
      return;
    }
    if (!url_regex.test(player_url)) {
      alert("Please enter a valid URL for the player photo.");
      return;
    }
    if (!url_regex.test(player_logo)) {
      alert("Please enter a valid URL for the player logo.");
      return;
    }
    if (!stat_regex.test(player_pac) || player_pac < 1 || player_pac > 100) {
      alert("Pace must be a number between 1 and 100.");
      return;
    }
    if (!stat_regex.test(player_pas) || player_pas < 1 || player_pas > 100) {
      alert("Passing must be a number between 1 and 100.");
      return;
    }
    if (!stat_regex.test(player_phy) || player_phy < 1 || player_phy > 100) {
      alert("Physical must be a number between 1 and 100.");
      return;
    }
    if (!stat_regex.test(player_sho) || player_sho < 1 || player_sho > 100) {
      alert("Shooting must be a number between 1 and 100.");
      return;
    }
    if (!rating_regex.test(player_rat) || player_rat < 1 || player_rat > 100) {
      alert("Rating must be a number between 1 and 100.");
      return;
    }
    if (!stat_regex.test(player_drib) || player_drib < 1 || player_drib > 100) {
      alert("Dribbling must be a number between 1 and 100.");
      return;
    }
    if (!stat_regex.test(player_def) || player_def < 1 || player_def > 100) {
      alert("Defending must be a number between 1 and 100.");
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
    
    // if(changement.children.length === 0 ){
    //   array = '';
    //   array = [];

    // // }

    count++;
    array.push(obg);

    add_players_to_changement();
    div_form.classList.toggle("hidden");
  });
}
