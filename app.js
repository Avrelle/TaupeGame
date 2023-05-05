$(document).ready(function(){
   let numberMole 
   let point = 0
   let time = 30
   let timeur
   let taupe

    $('img').hide()

//placement des taupes
   function randomMole(min, max) {
      return Math.round(Math.random() * (max - min + 1) + min)
    }

//apparaitre taupes
   function Number() {

      $('img').hide()
      numberMole = randomMole(0,7);
      $("img").eq(numberMole).show("fast");
   }

  
// seconde ou ya tout 
   $( "#start" ).click(function()
   {
      taupe = setInterval(Number, 700);
      timeur = setInterval(timer, 1000);
      setTimeout(clear, 30000)

      /*if je click sur une taupe le score +1 else score +0*/  
   });
   function timer(){
      time--;
      $("#time").text(time)
      
   }

   function clear(){
      $('img').hide()
      clearInterval(timeur);
      clearInterval(taupe);
      time--;//pour desecendre à 0
      $("#time").text(time) //sert afficher le timer a 0
   }


   $("img").click(function(){
      point++;
      console.log(point);
      $("img").eq(numberMole).hide()
      $("#point").text(point)
   })
  });