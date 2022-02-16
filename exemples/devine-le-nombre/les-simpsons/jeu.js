console.log("Fichier jeu.js importé ✅");

// déclarer et définir valeurs minimale, maximale et valeur à trouver
let min;
let target;
let max;
// 

// déclarer si c'est + ou - que la valeur
function settings() {
  min = parseInt(document.getElementById("min").value);
  max = parseInt(document.getElementById("max").value);

  console.log("Min : " + min);
  console.log("Max : " + max);

  target = Math.floor(Math.random() * (max - min)) + min;
  console.log(target);

  if (!min || !max) {
    console.log("veuillez remplir tous les champs");
  } else {
    document.getElementById("settingsbox").style.display = "none";
    document.getElementById("playbox").style.display = "block";
  }
}


// vérifier que la valeur est celle à trouver
function verification() {
  let userInput = document.getElementById("player-input").value;

  if (userInput < target) {
    console.log("c'est plus...");
    document.getElementById("plusoumoins").innerHTML = "c'est plus...";
    document.getElementById("plusoumoins").removeAttribute("hidden", "");
  } else if (userInput > target) {
    console.log("c'est moins...");
    document.getElementById("plusoumoins").innerHTML = "c'est moins...";
    document.getElementById("plusoumoins").removeAttribute("hidden", "");
  } else if (userInput == target) {
    console.log("c'est gagné");
    winsound();
    document.getElementById("plusoumoins").innerHTML = "Gagné !";
    document.getElementById("plusoumoins").removeAttribute("hidden", "");

  } else {
    console.log("else");
    defeatound();
    document.getElementById("plusoumoins").innerHTML = "Perdu...";
    document.getElementById("plusoumoins").removeAttribute("hidden", "");
  }

}

// musiques au click
let launchSound = () => new Audio("./media/mmmmm-donuts.mp3").play();

let winsound = () => new Audio("./media/mr-burns-excellent-version-francaise.mp3").play();

let defeatsound = () => new Audio("./media/los-simpson-nelson.mp3").play();
