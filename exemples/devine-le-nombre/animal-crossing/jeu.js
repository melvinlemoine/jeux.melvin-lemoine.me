// Définition des variables

let min = document.getElementById('nbmin');
let max = document.getElementById('nbmax');
let tenta = document.getElementById('nbtenta');

let maxVal;
let minVal;
let tentaVal;

let guessnb;
let nbgenerate;

// Options :

// Action entrer > validation du nombre

document.getElementById('try').addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        Verify();
    }
    })

  // ===  -------------------------------------------------------------------------------  === \\

// Son sur bouton

    function Son1() {
        var son1 = new Audio();
        son1.src = "media/son1.mp3";
        son1.play();
    }

    function Son2() {
        var son2 = new Audio();
        son2.src = "media/son2.mp3";
        son2.play();
    }

    function Son3() {
        var son3 = new Audio();
        son3.src = "media/son3.mp3";
        son3.play();
    }

    function Son4() {
        var son4 = new Audio();
        son4.src = "media/son4.mp3";
        son4.play();
    }

    function Son5() {
        var son5 = new Audio();
        son5.src = "media/son5.mp3";
        son5.play();
    }
   
// Fonctions du Jeu

// 1. Définir les valeurs des paramètres

function Launch () {
    maxVal = parseInt(max.value);
    minVal = parseInt(min.value);
    tentaVal = parseInt(tenta.value);


    if (maxVal < minVal){ 
        document.getElementById("error").innerText = "⚠️ Valeur invalide  :  la première valeur doit être inférieur à la deuxième⚠️";
        console.log("champ invalide")
    }

    // minimum

    else if (!minVal){ 
        document.getElementById("error").innerText = "⚠️ Veille à remplir la valeur minimum ⚠️";
        console.log("champ invalide")
        Son5();
    }

    // maximum

    else if (!maxVal){ 
        document.getElementById("error").innerText = "⚠️ Veille à remplir la valeur maximum ⚠️";
        console.log("champ invalide")
        Son5();
    }

    // tentatives

    else if (tentaVal < 1){ 
        document.getElementById("error").innerText = "⚠️ Valeur invalide  :  Le nombre de tentative doit être positif ⚠️";
        console.log("champ invalide")
        Son5();
    }

    else if (!tentaVal){ 
        document.getElementById("error").innerText = "⚠️ Veille à remplir le nombre de tentative ⚠️";
        console.log("champ invalide")
        Son5();
    }

    // Bouton fonctionnel

    else if (maxVal > minVal){
        nbgenerate  = Math.floor((Math.random() * (maxVal - minVal) + minVal));
        Son3();
        document.getElementById("sect-1").style.display="none"
        document.getElementById("sect-2").style.display="block"
        console.log("🎲 Nombre généré : " + nbgenerate);
        document.getElementById("infos2").innerText = "Tu as " + tentaVal + " tentative.s";
    }
}

// 2. Donner à l'utilisateur la capacité de deviner/jouer 

    function Verify () {

        guessnb = parseInt(document.getElementById('try').value);
        console.log(guessnb, nbgenerate);

        // Si le nombre de tentative est atteint

        if (tentaVal == 1) {
            document.getElementById("sect-2").style.display="none"
            document.getElementById("sect-4").style.display="block"
            Son4();
        }

        // Erreur de valeur 

        else if (guessnb > maxVal) { 
            document.getElementById("infos2").innerText = "⚠️ Ton nombre n'est pas compris dans les valeurs entrées dans les paramètres ⚠️";
            console.log("champ invalide")
            Son5();
        }

        else if (guessnb < minVal) { 
            document.getElementById("infos2").innerText = "⚠️ Ton nombre n'est pas compris dans les valeurs entrées dans les paramètres ⚠️";
            console.log("champ invalide")
            Son5();
        }

        // Si le nombre de tentative n'est pas atteint

        else if (guessnb) {
            tentaVal--;
            console.log("Nombre d'essais : " + tentaVal);
            console.log("Il te reste : " + tentaVal, "tentatives");
            document.getElementById("infos2").innerText = "Vous avez fait : " + tentaVal + " tentative.s";

            if (nbgenerate > guessnb) {
                document.getElementById("infos").innerText = "C'est plus cher ! ";
                console.log("Trop Petit");
                Son5();
            }
            
            else if (nbgenerate < guessnb) {
                document.getElementById("infos").innerText = "C'est moins cher !";
                console.log("Trop Grand");
                Son5();
            }  
           
            else if (guessnb == nbgenerate) {
                document.getElementById("sect-2").style.display="none"
                document.getElementById("sect-3").style.display="block"
                Son2();
            }
        } 

        // Valeur non définie

        else if (!guessnb) {
            document.getElementById("infos2").innerText = "⚠️ Veille à remplir le champ ⚠️";
            console.log("champ invalide")
            Son5();
        }
    }

    // 3. Page de félicitations

    function Reload() {
        window.location.reload(false); 
    }

    // Bonus 

    function Piege () {
    
        // Bouton fonctionnel

            Son1();
            document.getElementById("sect-2").style.display="none"
            document.getElementById("sect-5").style.display="block"
            document.getElementById("infos2").innerText = "BAM";
        }

