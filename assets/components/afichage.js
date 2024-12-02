
import { el, setText , } from "../js/main.js";



////////////////////////////////////////////////// NORMAL PLAYERS

export function add_to_terran(target, element){
    target.innerHTML = `<div id="${element.nationality}" data-id="${element.id}" class="relative w-20 h-20">
    <div class=" bg-cover flex flex-col items-center justify-center w-full h-full" style="background-image: url(assets/images/avp24ghdj-removebg.png);">
        <div class="w-20 h-full ">
        <div><img id="${element.id}"  class="w-11 self-center m-auto mb-0 mt-[6px]" src="" alt="">
    </div>
    <div class="h-[20%] w-full  text-black text-center mt-0  grid grid-cols-4">
    
        <div class="w-[50%] items-start font-bold text-[4px] mt-[2px]  col-start-2">
            <span class="flex flex-row"><span id="pac${element.name}"></span><span class="ml-1">div</span></span>
            <span class="flex flex-row"><span id="sho${element.name}"></span><span class="ml-1">  hand</span></span>
            <span class="flex flex-row"><span id="pas${element.name}"></span><span class="ml-1">  kick</span></span>

        </div>
        <div class="w-[50%]  mt-[2px] text-[4px] font-bold pl-2 grid col-start-3 ">
            <div class="flex flex-row"><span id="dri${element.name}"></span><span class="ml-1">  ref</span></div>
            <div class="flex flex-row"><span id="def${element.name}"></span><span class="ml-1">  spe</span></div>
            <div class="flex flex-row"><span id="phy${element.name}"></span><span class="ml-1">  pos</span></div>
        </div>
    </div>
    <button" onclick="delet(${element.nationality})"><img class="w-3 h-3 absolute top-0 left-0" src="./assets/images/supprimer.png" alt=""></button>
 

  </div>`
  let player = el(`${element.id}`);
    player.src = element.photo;
    setText(`pac${element.name}`, element.pace);
    setText(`sho${element.name}`, element.shooting);
    setText(`pas${element.name}`, element.passing);
    setText(`dri${element.name}`, element.dribbling);
    setText(`def${element.name}`, element.defending);
    setText(`phy${element.name}`, element.physical);
}

///////////////////////////////////////////////// GK player
export function add_to_terran_like_GK(target, element){
    target.innerHTML = `<div id="${element.nationality}" data-id="${element.id}" class="play relative play w-20 h-20 hover:z-20">
    <div class=" bg-cover flex flex-col items-center justify-center w-full h-full" style="background-image: url(assets/images/avp24ghdj-removebg.png);">
        <div class="w-20 h-full ">
        <div><img id="${element.id}"  class="w-11 self-center m-auto mb-0 mt-[6px]" src="" alt="">
    </div>
    <div class="h-[20%] w-full  text-black text-center mt-0  grid grid-cols-4">
    
        <div class="w-[50%] items-start text-[4px] mt-[2px] font-bold col-start-2">
            <span class="flex flex-row"><span id="div${element.name}"></span><span class="ml-1">div</span></span>
            <span class="flex flex-row"><span id="hand${element.name}"></span><span class="ml-1">  hand</span></span>
            <span class="flex flex-row"><span id="kick${element.name}"></span><span class="ml-1">  kick</span></span>

        </div>
        <div class="w-[50%]  mt-[2px] text-[4px] grid font-bold col-start-3 ">
            <div class="flex flex-row"><span id="ref${element.name}"></span><span class="ml-1">  ref</span></div>
            <div class="flex flex-row"><span id="spe${element.name}"></span><span class="ml-1">  spe</span></div>
            <div class="flex flex-row"><span id="pos${element.name}"></span><span class="ml-1">  pos</span></div>
        </div>
    </div>
    <div>
    <button" onclick="delet(${element.nationality})"><img class="w-3 h-3 absolute top-0 left-0" src="./assets/images/supprimer.png" alt=""></button>
    </div>
  </div>`
  let player = el(`${element.id}`);
    player.src = element.photo;
    setText(`div${element.name}`, element.diving);
    setText(`hand${element.name}`, element.handling);
    setText(`kick${element.name}`, element.kicking);
    setText(`ref${element.name}`, element.reflexes);
    setText(`spe${element.name}`, element.speed);
    setText(`pos${element.name}`, element.positioning);
}

//////////////////////////////////////////////////////////  DISPLAY   PLAYERS AFTER FILTER     

export function cards_of_players_after_filter(element) {
  return `
    <div id="div_g1" class="relative bg-gray-100 rounded-lg m-auto mb-4 shadow-md flex items-center p-4 h-10  flex-row w-[95%] cursor-pointer" onclick="add(${element.id})">
      <img class="w-10 h-10 bg-cover bg-center flex rounded-full mr-4" src="${element.photo}"></img>
      <div class="flex flex-row">
        <div id="div_g" class="flex justify-between items-center h-10">
            <span id="img" class="text-sm mr-2 w-20 m-auto font-semibold text-gray-800">${element.name}</span>
            <div id="" class="f_c flex-row hidden lg:flex">
              <span class="text-sm mr-2  w-5 pr-1 m-auto text-gray-600"><img src="${element.flag}"></span>
              <span id="club" class="text-sm mr-2 w-20 m-auto text-gray-600">${element.club}</span>
            </div >
            <div id="" class="l_n flex flex-row w-20">
                  <span class="text-sm w-4 text-gray-600"><img src="${element.logo}"></span>
                  <span class="text-sm mr-2 w-10 m-auto text-gray-600">${element.nationality}</span>
            </div>
            <span id="posi" class="text-sm px-1 m-auto ml-3  border-black border-2 text-gray-600">${element.position}</span>
        </div>
      
      </div>
    </div>
  `;
}

//////////////////////////////////////////////////////////  DISPLAY ALL PLAYERS      


  export function cards_of_players(element) {
    return `
      <div id="div_g1" class="relative bg-gray-100 rounded-lg mb-4 m-auto shadow-md flex items-center p-4 h-10 flex-row w-[95%] cursor-pointer">
        <img class="w-10 h-10 bg-cover bg-center flex rounded-full mr-4" src="${element.photo}"></img>
        <div class="flex flex-row">
          <div id="div_g" class="flex justify-between items-center h-10">
            <span id="img" class="text-sm mr-2 w-20 m-auto font-semibold text-gray-800">${element.name}</span>
            <div id="" class="f_c flex-row hidden lg:flex">
              <span class="text-sm mr-2  w-5 pr-1 m-auto text-gray-600"><img src="${element.flag}"></span>
              <span id="club" class="text-sm mr-2 w-20 m-auto text-gray-600">${element.club}</span>
            </div >
            <div id="" class="l_n flex flex-row w-20">
                  <span class="text-sm w-4 text-gray-600"><img src="${element.logo}"></span>
                  <span class="text-sm mr-2 w-10 m-auto text-gray-600">${element.nationality}</span>
            </div>
            <span class=" posi text-sm px-1 m-auto  border-black border-2 text-gray-600">${element.position}</span>
        </div>
        <div class="w-9">
            <button type="button" id="delet_btn" class="  absolute top-0 hover:scale-150 right-1  pl-2 pr-2 rounded-xl text-center text-xs text-white" onclick="delet(${element.id})"><img class="w-4" src="./assets/images/supprimer.png" alt=""></button>
            <button type="button" id="edit_btn" class="  absolute bottom-0 right-1  pl-2 pr-2 rounded-xl text-center text-xs text-white" onclick="edit(${element.id})"><img class="w-4"  src="./assets/images/editer.png" alt=""></button>
        </div>
        
        </div>
      </div>
    `;
  }

  ////////////////////////////////////////////////////////// DATA

  export let all_players = [
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