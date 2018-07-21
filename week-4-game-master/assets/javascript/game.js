$(document).ready(function() {


// ------------------- VARIABLES ----------------------

    computerNum = Math.floor(Math.random()*100)+19;
    var win =0;
    var lose = 0;
    var score = 0;
    var crystalNum = 0;
    counter =0;
    firstGame =false;
    
// ------------------- GENERATE RANDOM NUMBER----------------------

    function resetNUm(){
        counter=0;
    computerNum =Math.floor(Math.random()*100)+19;
       
    $("#randomNumber").text(computerNum);
    
    
    }
   
// ------------------- RESET ----------------------

    function reset(){
     
    
        var imageCrystal = $(".crystals")
    
        crystalNum =Math.floor(Math.random()*12);
    
        imageCrystal.attr("data-crystalvalue", crystalNum);
     console.log(imageCrystal);
        score = 0;
        firstGame =true;
    }
    
// ------------------- RANDOM CRYSTALS ----------------------

    
    $(".crystals").on("click" ,function(){
    
        reset();
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log(crystalValue);
        crystalValue = parseInt(crystalValue);
    
        counter += crystalValue;
        
        console.log(counter);
        $("#result").text(counter);
       
    if (firstGame){
        if (counter === computerNum) {
           
           win++;
           $("#wins").text(win);
    
          score = counter;
          $("#scoreNum").text(score)
    
          resetNUm();
          
          }
      
          else if (counter >= computerNum) {
           lose++;
            score = counter;
            $("#scoreNum").text(score)
            $("#lose").text(lose);
            resetNUm(); 
          }
        }
      });
    
// ------------------- RUN IT ----------------------
     
      $("#randomNumber").text(computerNum);
      $("#result").text(counter);
     });
    