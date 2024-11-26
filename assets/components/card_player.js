function card_player(name){
name.innerHTML = `
      <div  class=" hi col-start-${i+1} row-start-6 bg-cover w-full flex flex-col items-center justify-center " style="background-image: url(assets/images/images-removebg-preview.png);">
                <img id="player_${i + 1}" class="w-11 self-center m-auto mb-0 mt-2" src="" alt="">
                <div class="h-[20%] w-full flex flex-row text-white text-center mt-0">
                    
                    <div class="w-[50%] items-start text-[4px] mt-[2px]  grid ml-4">
                        <span id="pac${i+1}">93</span>
                        <span id="sho${i+1}">83</span>
                        <span id="pas${i+1}">74</span>
                    </div>
                    <div class="w-[50%]  mt-[2px] text-[4px] grid mr-7 ">
                        <span id="dri${i+1}">95</span>
                        <span id="def${i+1}">32</span>
                        <span id="phy${i+1}">54</span>
                    </div>
                </div>
            </div>`
};

