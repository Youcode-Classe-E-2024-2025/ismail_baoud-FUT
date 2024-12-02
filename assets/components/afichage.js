
import { el, setText , } from "../js/main.js";



////////////////////////////////////////////////// ALL PLAYERS

export function add_to_terran(target, element){
    target.innerHTML = `<div id="${element.nationality}" data-id="${element.id}" class="card hover:cursor-pointer relative w-20 h-20">
    <div class=" bg-cover flex flex-col items-center justify-center w-full h-full" style="background-image: url(assets/images/avp24ghdj-removebg.png);">
        <div class="w-20 h-full ">
        <div><img id="${element.id}"  class="w-11 self-center m-auto mb-0 mt-[6px]" src="" alt="">
        <span class="text-orange-900 absolute text-[0.7rem] font-bold left-[18%] top-[10%]">${element.rating}</span>
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
    <button  onclick="delet(${element.nationality})"><img class="w-3 h-3 absolute top-0 left-0" src="./assets/images/supprimer.png" alt=""></button>

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
    target.innerHTML = `<div id="${element.nationality}"data-id="${element.id}" class="play relative play hover:cursor-pointer w-20 h-20 hover:z-20">
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
        <div class="w-[50%]  mt-[2px] text-[4px] grid pl-2 font-bold col-start-3 ">
            <div class="flex flex-row"><span id="ref${element.name}"></span><span class="ml-1">  ref</span></div>
            <div class="flex flex-row"><span id="spe${element.name}"></span><span class="ml-1">  spe</span></div>
            <div class="flex flex-row"><span id="pos${element.name}"></span><span class="ml-1">  pos</span></div>
        </div>
    </div>
    <div>
    <button   onclick="delet(${element.nationality})"><img class="w-3 h-3 absolute top-0 left-0" src="./assets/images/supprimer.png" alt=""></button>
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
                  <span class="text-sm w-4 text-gray-600"><img src="${element.logo}"></span>

              <span id="club" class="text-sm mr-2 w-24 m-auto text-gray-600">${element.club}</span>
            </div >
            <div id="" class="l_n flex flex-row w-20">
              <span class="text-sm mr-2  w-5 pr-1 m-auto text-gray-600"><img src="${element.flag}"></span>

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

