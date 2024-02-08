let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";


//Funcion que se activa cuando le damos al boton Si
document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML = "No lo vas a lamentar mi terronzito de miel";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      var imagenCambiar = document.getElementById("gatoTriste");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "Me dueles mi terronzito de miel";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("siBtn").style.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAA"

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML = "Se que quieres venir, no lo niegues";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "30px 50px ";
      document.getElementById("siBtn").innerHTML = "VAMOOOOS";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML ="Ya no me quiere mi terronzito de miel";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px ";
      document.getElementById("siBtn").innerHTML = "Mi terronzito de miel vuelve :)";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "Se acabo, te voy a sustituir por las mancuernas, ellas no mienten";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px ";
      document.getElementById("siBtn").innerHTML = "Ha sido facil convencerte";

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML = "ES MENTIRA, no te puedo sustituir por una mancuernas :(((";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "80 px";
      document.getElementById("siBtn").style.padding = "60px 80px ";
      document.getElementById("siBtn").innerHTML = "VAMOSSSSSSSS";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "Porfavor, no me dejes :((";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px ";
      document.getElementById("siBtn").innerHTML = ":)";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML = "Vale, vale, despues no me pidas que sea tu spotter en press banca";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "80px 100px ";
      document.getElementById("siBtn").innerHTML = "Retiro lo que he dicho antes, nunca dejaria de hacerlo mi bollito de crema";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "Tu lo has querido, ya no vuelvas mas";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "110px";
      document.getElementById("siBtn").style.padding = "90px 110px ";
      document.getElementById("siBtn").innerHTML = "Otra mas y me enfado";

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML = "Vale, vale ya veo como me quieres";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "100px 120px ";
      document.getElementById("siBtn").innerHTML = "Si quieres que te perdone regalame una nerf";

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML = "Voy a buscarme otro terronzito de miel";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "130px";
      document.getElementById("siBtn").style.padding = "110px 130px ";
      document.getElementById("siBtn").innerHTML = "Creo que ya no me hace falta";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML ="Ya no me pidas volver, es demasiado tarde";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      document.getElementById("siBtn").style.fontSize = "140px";
      document.getElementById("siBtn").style.padding = "120px 140px ";
      document.getElementById("siBtn").innerHTML = "Comprame comida y te perdono todo";


      noButtonState++;
      break;
    case 11:
      document.getElementById("noBtn").innerHTML = "No te voy a perdonar nada, ya tengo nuevo terronzito de miel";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      document.getElementById("siBtn").style.fontSize = "150px";
      document.getElementById("siBtn").style.padding = "130px 150px ";
      document.getElementById("siBtn").innerHTML = "BIEEEEN, era mentira de lo del nuevo terronzito de miel";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML ="Vale, vale, yo tambien te quiero he";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "160px";
      document.getElementById("siBtn").style.padding = "140px 160px ";
      document.getElementById("siBtn").innerHTML = "SIUUUUUUUU";

      noButtonState++;
      break;

    case 13:
      document.getElementById("noBtn").innerHTML = "Ahora soy un lobo solitario, no te perdono";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      document.getElementById("siBtn").style.fontSize = "170px";
      document.getElementById("siBtn").style.padding = "150px 170px ";
      document.getElementById("siBtn").innerHTML = "Te perdono :)";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML = "Vas a dejar ir al mejor terronzito de miel que puedes llegar a tener";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "180px";
      document.getElementById("siBtn").style.padding = "160px 180px ";
      document.getElementById("siBtn").innerHTML = "Sabia yo que en el fondo quieres que sea aun tu terronzito de miel";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML = "Cuando hagas pr no te ayudare a levantar la barra si no puedes, te lo has buscado";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "190px";
      document.getElementById("siBtn").style.padding = "170px 190px ";
      document.getElementById("siBtn").innerHTML = "VAMMMMMOOOOOOSSSS";

      noButtonState++;
      break;

    case 16:
      document.getElementById("noBtn").innerHTML = "por favooooooor";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState = 0;
      break;

    default:
      // Por si acaso, maneja cualquier otro caso aquí
      break;
  }
});
