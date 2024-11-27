import { el,setText } from "../js/main.js";
export function inner(target, element){
    target.innerHTML += `<div class="play w-20 h-20 hover:z-20">
    <div class=" hi bg-cover flex flex-col items-center justify-center w-full h-full" style="background-image: url(assets/images/card1.png);">
        <div class="w-20 h-full ">
        <div><img id="player_${element.name}" class="w-11 self-center m-auto mb-0 mt-[6px]" src="" alt="">
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
  </div>`
  let player = el(`player_${element.name}`);
    player.src = element.photo;
    setText(`pac${element.name}`, element.shooting);
    setText(`sho${element.name}`, element.shooting);
    setText(`pas${element.name}`, element.shooting);
    setText(`dri${element.name}`, element.shooting);
    setText(`def${element.name}`, element.shooting);
    setText(`phy${element.name}`, element.shooting); 
}
// function addplayer(allPlayers){
  
//     document.getElementById('player_x').style.display = 'none'
//   document.getElementById('hid').innerHTML += `<div class="w-20 h-20 col-start-3 row-start-2">
//     <div class=" hi bg-cover flex flex-col  items-center justify-center w-full h-full" style="background-image: url(/assets/images/images-removebg-preview.png);">
//         <div class="w-20 h-full ">
//         <div><img id="player_${allPlayers[0].name}" class="w-11 self-center m-auto mb-0 mt-[6px]" src="" alt="">
//     </div>
//     <div class="h-[20%] w-full flex flex-row text-white text-center mt-0">
    
//         <div class="w-[50%] items-start text-[4px] mt-[2px]  grid ml-4">
//             <span id="pac${allPlayers[0].name}">93</span>
//             <span id="sho${allPlayers[0].name}">83</span>
//             <span id="pas${allPlayers[0].name}">74</span>
//         </div>
//         <div class="w-[50%]  mt-[2px] text-[4px] grid mr-7 ">
//             <span id="dri${allPlayers[0].name}">95</span>
//             <span id="def${allPlayers[0].name}">32</span>
//             <span id="phy${allPlayers[0].name}">54</span>
//         </div>
//     </div>
// </div>`
// console.log('hiw');

// let player = document.getElementById(`player_${allPlayers[0].name}`);
//     player.src = allPlayers[0].photo;
    
//     setText(`pac${allPlayers[0].name}`, allPlayers[0].pace);
//     setText(`pas${allPlayers[0].name}`, allPlayers[0].passing);
//     setText(`sho${allPlayers[0].name}`, allPlayers[0].shooting);
//     setText(`dri${allPlayers[0].name}`, allPlayers[0].dribbling);
//     setText(`def${allPlayers[0].name}`, allPlayers[0].defending);
//     setText(`phy${allPlayers[0].name}`, allPlayers[0].physical);
//     console.log('fin');
    
// }
function place_of_player(arr){
    const RW = arr.filter(el=>el.position === "RW")
    const LW = arr.filter(el=>el.position === "LW")
    const ST = arr.filter(el=>el.position === "ST")
    const LB = arr.filter(el=>el.position === "LB")
    const RB = arr.filter(el=>el.position === "RB")
   
    const CM = arr.filter(el=>el.position === "CM")
    const CDM = arr.filter(el=>el.position === "CDM")
    const CB = arr.filter(el=>el.position === "CB")
  
    
    console.log(RW);
    console.log(LW);
    console.log(ST);
    console.log(LB);
    console.log(RB);
    console.log(GK);
    console.log(CM);
    console.log(CDM);
    console.log(CB);
  }