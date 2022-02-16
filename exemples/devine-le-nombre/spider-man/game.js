console.log("Fichier valeur-champs.js importé ✅");


// Nombre aléatoire
let valeurmin = document.getElementsByName("valeurmin");
var valeur1;

// Les autres données
let valeurmax = document.getElementsByName("valeurmax");
var valeur2;

let nbtentatives = document.getElementsByName("nbtentatives");
let nombretentatives;

var number;

function lancer() {
    console.log("----- 🔍 Vérification de l'histoire 🔎 -----");
    
    valeur1 = parseInt(valeurmin[0].value);
    valeur2 = parseInt(valeurmax[0].value);

    if (valeur1 > 0) {
        console.log("✔ La hauteur minimale est définie");
        if (valeur1 < valeur2) {
            console.log("✅ La hauteur minimale est correcte");
            console.log("✅ La hauteur maximale est définie et correcte")
        } else {
            console.log("❌ La hauteur minimale est supérieure ou égale à la hauteur maximale")
        }
    } else {
        console.log("❌ La hauteur minimale n'est pas définie");
    }

    nombretentatives = parseInt(nbtentatives[0].value);
    if (nombretentatives === "") {
        console.log("❌ Notre nombre de toiles n'est pas défini");
    } else {
        console.log("✔ Notre nombre de toiles est défini");
    }

    if (nombretentatives <= 0) {
        console.log("❌ Notre nombre de toiles est inférieur ou égal à 0A");
    } else {
        console.log("✅ Notre nombre de toiles est correct")
    }

    if (valeur1 > 0 && valeur1 < valeur2 && nombretentatives > 0) {
        console.log("✅ Vérification de l'histoire validée");
        document.getElementById("page-parametre").style.display = "none";
        document.getElementById("page-jeu").style.display = "block";
        audioPlay();
    } else {
        console.log("❌ Vérification de l'histoire non validée");
    }

    // Donner la conclusion
    console.log("Elle se situe entre ⬇ " + valeur1 + " et ⬆ " + valeur2 + " avec 🔃 " + nombretentatives + "  de toiles");

    // Donner nombre aléatoire
    nbaleatoire();

    // Changer les textes
    document.getElementById("minimum").innerHTML = valeur1;
    document.getElementById("maximum").innerHTML = valeur2;
    document.getElementById("tentatives").innerHTML = nombretentatives;
}

// Premier son
let audio = document.getElementById("audio-1");
function audioPlay() {
    audio.play();
}

// Nombre aléatoire
function nbaleatoire() {
    let min = Math.ceil(valeur1);
    let max = Math.floor(valeur2);
    number = Math.floor((Math.random() * (max - min)) + min);
    console.log("🎲 Génération de la hauteur aléatoire : " + number);
}

// Utiliser le clavier : entrer
document.getElementById("enter").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("bouton").click();
    }
})

function verifier() {
    console.log("##### CHECK FUNCTION #####")

    let guess = document.getElementsByName("guess");
    const guessContent = parseInt(guess[0].value);
    console.log("Notre hauteur entrée : " + guessContent);
    console.log("L'hauteur où elle se situe : " + number);

    let guessTentatives;
    let text;

    if (number == guessContent) {
        console.log("C'est gagné ! 🥳");
        document.getElementById("page-jeu").style.display = "none";
        document.getElementById("page-victoire").style.display = "block";
        audioPlayVictoire()
        tentatives1();
    } else if (nombretentatives == 0) {
        console.log("C'est perdu ! 🤯");
        document.getElementById("page-jeu").style.display = "none";
        document.getElementById("page-defaite").style.display = "block";
        audioPlayDefaite()
        tentatives1();
    } else {
        console.log(guessContent);
        if (guessContent > valeur1 && guessContent < valeur2) {
            if (guessContent > number) {
                console.log("🔽 C'est plus petit 🔽");
                text = document.getElementById("text").innerHTML = "🔽 C'est plus petit 🔽";
                audioPlay1()
                tentatives();
            } else {
                console.log("🔼 C'est plus grand 🔼");
                text = document.getElementById("text").innerHTML = "🔼 C'est plus grand 🔼";
                audioPlay1()
                tentatives();
            }
        } else {
            console.log("❌La hauteur entrée ne peut pas être inférieure ou égale à la valeur minimale ou supérieure ou égale à la valeur maximale❌");
            text = document.getElementById("text").innerHTML = "❌La hauteur entrée ne peut pas être inférieure ou égale à la valeur minimale ou supérieure ou égale à la valeur maximale❌";
            audioPlay1()
            tentatives();
        }
    }
}

// Deuxième son
let audio1 = document.getElementById("audio-2");
function audioPlay1() {
    audio1.play();
}

// musique victoire
let audio2 = document.getElementById("audio-victoire");
function audioPlayVictoire() {
    audio2.play();
}

// musique defaite
let audio3 = document.getElementById("audio-defaite");
function audioPlayDefaite() {
    audio3.play();
}


function tentatives1() {
    console.log("📩 Message function");
    console.log("Il me reste " + nombretentatives + " toiles");
    console.log("Il ne te reste aucune toile");
}

function tentatives() {
    console.log("📩 Message function");
    console.log("Il me reste " + nombretentatives + " toiles");
    nombretentatives = nombretentatives - 1;
    document.getElementById("tentatives").innerHTML = nombretentatives;
    console.log("Il te reste " + nombretentatives + " toiles");
}


function relancer() {
    window.location.reload(false);
}