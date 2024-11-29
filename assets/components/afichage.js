
import { el, setText , } from "../js/main.js";

////////////////////////////////////////////////// NORMAL PLAYERS

export function add_to_terran(target, element){
    target.innerHTML = `<div id="${element.nationality}" data-id="${element.id}" class="relative play w-20 h-20 hover:z-20">
    <div class=" hi bg-cover flex flex-col items-center justify-center w-full h-full" style="background-image: url(assets/images/card1.png);">
        <div class="w-20 h-full ">
        <div><img id="${element.id}"  class="w-11 self-center m-auto mb-0 mt-[6px]" src="" alt="">
    </div>
    <div class="h-[20%] w-full flex flex-row text-white text-center mt-0">
    
        <div class="w-[50%] items-start text-[4px] mt-[2px]  grid ml-4">
            <span id="pac${element.name}"></span>
            <span id="sho${element.name}"></span>
            <span id="pas${element.name}"></span>
        </div>
        <div class="w-[50%]  mt-[2px] text-[4px] grid mr-7 ">
            <span id="dri${element.name}"></span>
            <span id="def${element.name}"></span>
            <span id="phy${element.name}"></span>
        </div>
    </div>
    <button class="bg-red-300 w-5 h-5 rounded-[100%] absolute top-0 left-0" onclick="delet(${element.nationality})"></button>
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

///////////////////////////////////////////////// GK
export function add_to_terran_like_GK(target, element){
    target.innerHTML = `<div id="${element.nationality}" data-id="${element.id}" class="play relative play w-20 h-20 hover:z-20">
    <div class=" hi bg-cover flex flex-col items-center justify-center w-full h-full" style="background-image: url(assets/images/Capture_d_écran_2024-11-29_040710-removebg-preview.png);">
        <div class="w-20 h-full ">
        <div><img id="${element.id}"  class="w-11 self-center m-auto mb-0 mt-[6px]" src="" alt="">
    </div>
    <div class="h-[20%] w-full  text-white text-center mt-0  grid grid-cols-4">
    
        <div class="w-[50%] items-start text-[4px] mt-[2px]  col-start-2">
            <span class="flex flex-row"><span id="div${element.name}"></span><span class="ml-1">div</span></span>
            <span class="flex flex-row"><span id="hand${element.name}"></span><span class="ml-1">  hand</span></span>
            <span class="flex flex-row"><span id="kick${element.name}"></span><span class="ml-1">  kick</span></span>

        </div>
        <div class="w-[50%]  mt-[2px] text-[4px] grid col-start-3 ">
            <div class="flex flex-row"><span id="ref${element.name}"></span><span class="ml-1">  ref</span></div>
            <div class="flex flex-row"><span id="spe${element.name}"></span><span class="ml-1">  spe</span></div>
            <div class="flex flex-row"><span id="pos${element.name}"></span><span class="ml-1">  pos</span></div>
        </div>
            <button class="bg-red-300 w-5 h-5 rounded-[100%] absolute top-0 left-0" onclick="delet(${element.nationality})"></button>
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
//////////////////////////////////////////////////////////  DISPLAY ALL PLAYERS      

 export function cards_of_players(element) {
    return `
      <div id="div_g1" class="bg-white rounded-lg mb-4 shadow-md flex items-center p-4 h-10  flex-row w-full cursor-pointer" onclick="add(${element.id})">
        <img class="w-10 h-10 bg-cover bg-center flex rounded-full mr-4" src="${element.photo}""></img>
        <div class="flex flex-row">
          <div id="div_g" class="flex justify-between items-center h-10">
              <span id="img" class="text-sm mr-2 m-auto font-semibold text-gray-800">${element.name}</span>
              <div id="f_c" class="flex-row hidden lg:flex">
                <span class="text-sm mr-2  w-6 m-auto text-gray-600"><img src="${element.flag}"></span>
                <span id="club" class="text-sm mr-2 w-20 m-auto text-gray-600">${element.club}</span>
              </div >
              <div id="l_n" class="flex flex-row">
                    <span class="text-sm w-4 m-auto  mr-5 text-gray-600"><img src="${element.logo}"></span>
                    <span class="text-sm mr-2 w-16 m-auto text-gray-600">${element.nationality}</span>
              </div>
              <span id="posi" class="text-sm mr-2 m-auto px-3 ml-4 border-black border-2 text-gray-600">${element.position}</span>
          </div>
        <div>
            <button type="button" id="delet_btn" class=" bg-red-300  pl-2 pr-2 rounded-xl text-center text-xs text-white" onclick="delet(${element.id})">delet</button>
            <button type="button" id="edit_btn" class=" bg-blue-300  pl-3 pr-3 rounded-xl text-center text-xs text-white" onclick="edit(${element.id})">edit</button>
        </div>
        
        </div>
      </div>
    `;
  }