console.log('Je voudrais vous souhaiter une bienvenue à tous…')
var nombre_genere = -1;
var tentative = -1;
var minimal = null;
var maximal = null;
var count_launch_music = 1;

var minimal_input = document.getElementById('minimal');
var maximal_input = document.getElementById('maximal');
var tentative_input = document.getElementById('essai');
var valide_button = document.getElementById('valide');

var audio_depart = new Audio('assets/squid-game-music-un-deux-trois-soleil-je-voudrai-vous-souhaite-une-bienvenue-a-tous.mp3');
var audio_win = new Audio('assets/you-win.mp4');
var audio_lose = new Audio('assets/tir-darme-a-feu_01.mp4');
var audio_commencer = new Audio('assets/partie.mp4');
var audio_try = new Audio('assets/try-again.mp3');
var audio_rise = new Audio('assets/rise.mp3');
var audio_down = new Audio('assets/down.mp4');



document.onclick = function(){
    if(count_launch_music == 1){
        audio_depart.play();
        count_launch_music--;
    }
    
}


minimal_input.addEventListener('keyup', (evt) => {
    check(); 
})

maximal_input.addEventListener('keyup', (evt) => {
    check();
})

tentative_input.addEventListener('keyup', (evt) => {
    check();
})


function check(){
    minimal = parseInt(minimal_input.value)
    maximal = parseInt(maximal_input.value)
    tentative = parseInt(tentative_input.value)

    let message_error = document.getElementById("error-message")


    if (isNaN(minimal) || isNaN(maximal) || isNaN(tentative)){

        message_error.innerText = 'Veuillez remplir tous les champs'
        valide_button.setAttribute('disabled','true');

    }else{
        if (minimal < maximal){

            if (tentative > 0){
                message_error.innerText = '';
                valide_button.removeAttribute('disabled');
                
            } else {
                message_error.innerText = 'Votre nombre de tentatives ne peut être négatif'
                valide_button.setAttribute('disabled','true');
            }
            
        } else{
            message_error.innerText = 'maximal ne peut pas être inférieur ou égal à minimal'
            valide_button.setAttribute('disabled', 'true');
        }   
    }
}


function generer(){

    minimal = parseInt(minimal_input.value)
    maximal = parseInt(maximal_input.value)
    tentative = parseInt(tentative_input.value)

    let message_error = document.getElementById("error-message")


    if (isNaN(minimal) || isNaN(maximal) || isNaN(tentative)){

        message_error.innerText = 'Veuillez remplir tous les champs'
        valide_button.setAttribute('disabled','true');

    }else{
        if (minimal < maximal){

            if (tentative > 0){
                audio_depart.pause();
                audio_commencer.play();
                nombre_genere = Math.floor(Math.random() * (maximal - minimal) + minimal);
                document.getElementById("start").style.display ="none"
                document.getElementById("suite").style.display ="flex"
                document.getElementById("x1").innerText = minimal
                document.getElementById("x2").innerText = maximal
                document.getElementById("x3").innerText = tentative
   
            } else {
                message_error.innerText = 'Votre nombre de tentatives ne peut être négatif'
                valide_button.setAttribute('disabled','true');
            }
            
        } else{
            message_error.innerText = 'maximal ne peut pas être inférieur ou égal à minimal'
            valide_button.setAttribute('disabled', 'true');
        }   
    }
                

}


document.getElementById("choisi").addEventListener( 'keyup', function(evt){

    if (evt.key == 'Enter'){
        verifier()
    }
})

function verifier(){
    let chiffre = parseInt(document.getElementById("choisi").value);
    let indice = document.getElementById("indice")

    if (nombre_genere == chiffre){
        document.getElementById("start").style.display ="none";
        document.getElementById("suite").style.display ="none";
        document.getElementById("victoire").style.display="flex";
        audio_win.play();
        document.getElementById("perdu").style.display="none";

    } else if (chiffre < minimal || chiffre > maximal){
        indice.innerText = "Veuillez renseigner une valeur comprise entre le minimum et le maximum que vous avez indiqué"

    } else if (nombre_genere > chiffre){
        indice.innerText = " C'est plus grand "
        tentative = tentative -1;
        document.getElementById("x3").innerText = tentative
        audio_rise.play();
   

    } else if (nombre_genere < chiffre){
        indice.innerText = " C'est plus petit "
        tentative = tentative -1;
        document.getElementById("x3").innerText = tentative
        audio_down.play();

    } 
    if (tentative == 0){
        document.getElementById("start").style.display ="none"
        document.getElementById("suite").style.display ="none"
        document.getElementById("victoire").style.display="none"
        document.getElementById("perdu").style.display="flex"
        audio_lose.play();

    }

    console.log(tentative)

    document.getElementById("choisi").value = NaN; 

}

function relance1(){
    document.getElementById("start").style.display ="flex";
    document.getElementById("perdu").style.display="none";
    minimal_input.value='';
    maximal_input.value='';
    tentative_input.value='';
    valide_button.setAttribute('disabled','true');
    audio_try.play();
}

function relance2(){
    document.getElementById("start").style.display ="flex";
    document.getElementById("victoire").style.display="none";
    minimal_input.value='';
    maximal_input.value='';
    tentative_input.value='';
    valide_button.setAttribute('disabled','true');
    audio_try.play();
}