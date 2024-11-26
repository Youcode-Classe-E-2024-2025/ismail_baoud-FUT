const terran = document.getElementById("terran");

fetch("/assets/data/players.json")
  .then((res) => res.json())
  .then((data) => {
    allPlayers = data.players;
    console.log(allPlayers);
    console.log(allPlayers[1].photo);

    function el(id_or_class_or_elementTagName) {
      return document.querySelector(id_or_class_or_elementTagName);
    }

    function setText(id, text) {
      document.getElementById(id).textContent = text;
    }

    // for (let i = 0; i < ; i++) {
    //     el('#terran')
    //   let player = el(`#player_${i + 1}`);
    //   player.src = allPlayers[i].photo;
    //   setText(`pac${i + 1}`, allPlayers[i].pace);
    //   setText(`pas${i + 1}`, allPlayers[i].passing);
    //   setText(`sho${i + 1}`, allPlayers[i].shooting);
    //   setText(`dri${i + 1}`, allPlayers[i].dribbling);
    //   setText(`def${i + 1}`, allPlayers[i].defending);
    //   setText(`phy${i + 1}`, allPlayers[i].physical);
      
    // }
  })
  .catch((error) => console.log(error));
