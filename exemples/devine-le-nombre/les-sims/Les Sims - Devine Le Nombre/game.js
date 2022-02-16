

let max = parseInt(document.getElementById('max_value').value);
let min = parseInt(document.getElementById('min_value').value);
let tentatives = parseInt(document.getElementById('tentatives').value);


function son1() {
    var son1 = new Audio();
    son1.src = "audio/happy_you_win.mp3";
    son1.play();
}

function son2() {
    var son2 = new Audio();
    son2.src = "audio/Sad_you_loose.mp3";
    son2.play();
}

function son3() {
    var son3 = new Audio();
    son3.src = "audio/motherlode_final.mp3";
    son3.play();
}

function son4() {
    var son4 = new Audio();
    son4.src = "audio/aliens.mp3";
    son4.play();
}

function son5() {
    var son5 = new Audio();
    son5.src = "audio/susu.mp3";
    son5.play();
}




function guessGame(){

    max = parseInt(document.getElementById('max_value').value);
    min = parseInt(document.getElementById('min_value').value);
    // randomNb = Math.floor((Math.random() * max) + min);
    tentatives = parseInt(document.getElementById('tentatives').value);
    

    if (!min || !max || !tentatives){
        document.getElementById('Error').innerText = "Veuillez remplir tous les champs"
    } else {

        if(min < max){

            if (tentatives > 0){
                document.getElementById("partie1").style.display ="none"
                document.getElementById("partie2").style.display ="block"
                document.getElementById("infos").innerText = "Nombre de tentatives : " + tentatives;
                son5();


            } else {
                document.getElementById('Error').innerText = "Veuillez rentrer une tentative supérieur à 0"
            }

        } else{
            document.getElementById('Error').innerText = "Veuillez rentrer un minimum plus petit que le maximum"
        }
    }

    console.log("Intervalle min : " + min);
    console.log("Intervalle max : " + max);

        
    randomInt = nbAleatoire(min, max);
    console.log("Nombre aléatoire : " + randomInt);
    
}

let guess;
let randomInt;

function nbAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



function Game() {

    guess = parseInt(document.getElementById('userNumber').value);



    if (tentatives == 1) {
        document.getElementById("partie1").style.display = "none"
        document.getElementById("partie2").style.display = "none"
        document.getElementById("fail").style.display = "block"
        son2();

    }


// Empêcher de rentrer une valeur supérieur ou inférieur par rapport à l'intervalle 


    else if (guess > max) { 
    document.getElementById("infos").innerText = " Ton nombre n'est pas compris dans les valeurs entrées dans les paramètres ";
    console.log("champ invalide")
    }

    else if (guess < min) { 
    document.getElementById("infos").innerText = " Ton nombre n'est pas compris dans les valeurs entrées dans les paramètres ";
    console.log("champ invalide")
    }

    else if (guess) {
    
        tentatives--;
        console.log("Nombre d'essais : " + tentatives);
    
        console.log("Il vous reste : " + tentatives, "tentative(s)");
        document.getElementById("infos2").innerText = "Il vous reste : " + tentatives + " tentative(s)";
    
        if (randomInt > guess) {
            document.getElementById('infos').innerText = "C'est plus de flouz !"
            console.log("Trop Petit");
            son3();
        }

        else if (randomInt < guess) {
            document.getElementById('infos').innerText = "C'est moins de flouz !"
            console.log("Trop Grand");
            son3();
        }

        else if (randomInt == guess){
            document.getElementById("partie1").style.display = "none"
            document.getElementById("partie2").style.display = "none"
            document.getElementById("fail").style.display = "none"
            document.getElementById("win").style.display = "block"
            console.log("Tu as gagné, bravo à toi !")
            son1();
        }
       
    
    }

     else if (!guess) {
            console.log("Veuillez saisir une valeur correct ! ")
            document.getElementById("infos").innerText = "Veuillez remplir le champ"
        }

   
   
}


// validation avec entrer

document.getElementById('userNumber').addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        Game();
    }

})
// refresh

function reload() {
    window.location.reload(false); 
    
}

// Secret
function gameSecret(){
    document.getElementById("partie1").style.display = "none"
    document.getElementById("partie2").style.display = "none"
    document.getElementById("secret").style.display = "block"
    son4();
    

}




 

