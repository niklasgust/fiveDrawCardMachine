
$(document).ready(function(){ 
  'use strict'; 
  
  var deck = 52;
  
// $("#playGame").hide();
 $("#outputCardNumber").html("<p>52 kort kommer visas</p>");
         $('.showCards').calculateFiveCardOdds(deck);
    
  $('#52').click(function() {
        deck = 52; 
        $("#outputCardNumber").html("<p>52 kort kommer visas</p>");
         $('.showCards').calculateFiveCardOdds(deck);
  });
  
  $('#36').click(function() {
        deck = 36;  
        $("#outputCardNumber").html("<p>36 kort kommer visas</p>");
         $('.showCards').calculateFiveCardOdds(deck);
  });
  
   $('#32').click(function() {
        deck = 32;   
          $("#outputCardNumber").html("<p>32 kort kommer visas</p>");
         $('.showCards').calculateFiveCardOdds(deck);
  });

    $('#cardShower').click(function() {
                 $('.showCards').calculateFiveCardOdds(deck);   
    });
 
 
});   





    
//Sektion för kod till plugin

(function($){
                $.fn.calculateFiveCardOdds = function(deck){ 
   
            
    //variabler                    
    var LowestCard;  
     //Card deck
   if(deck == 52) {LowestCard = 2;}
    else if (deck == 36) {LowestCard = 6;}
   else {LowestCard = 7;} 
    
    cardpick = new Audio("cardpick.mp3");
    loadsound = new Audio("finishload.mp3");
    startsound = new Audio("start.mp3");
     
   (new Audio()).canPlayType("audio/ogg; codecs=vorbis");

                  
        //ta bort eventuella barn-element/kort            
          $(".showCards").empty(); 
       $(".choosen").empty(); 
       $(".choosenHead").empty(); 
       $("#dealbuttom").empty();
        $("#comp1, #comp2, #comp3, #comp4, #yours").empty();
        $("#yres, #c1res, #c2res, #c3res, #c4res").empty();
         $("#yresname, #c1resname, #c2resname, #c3resname, #c4resname").empty();
         $("#gameresult, #bkgPlayGame").empty();
         $("#playGame, #bkgPlayGame, #playGame, #simulate").hide();
       
       
      startsound.play();
   
   //objekt för spelarnas kort och spel  
    var yourCard = {  
   cpick : "",
   cnum : 0,
   cname : "",
   aliasname : "",
   num : -1,
    yourFive : [0,0,0,0,0], //nummer på mina kort sparas i array
   yourFiveName : new Array(), //namn på mina kort
   yourHand : 0, //värdet på handen.
   allWins : 0,
   allWins1 : 0,
   allWins2 : 0,
   allWins3 : 0
   }   
   
   var comp1 = {  
   c1five : [0,0,0,0,0],
   c1fiveName : new Array(),
   c1hand : 0 
   }   
   
   var comp2 = {  
   c2five : [0,0,0,0,0],
   c2fiveName : new Array(),
   c2hand : 0 
   } 
   
   var comp3 = {  
   c3five : [0,0,0,0,0],
   c3fiveName : new Array(),
   c3hand : 0 
   } 
   
   var comp4 = {  
   c4five : [0,0,0,0,0],
   c4fiveName : new Array(),
   c4hand : 0 
   } 
   
   var donts = {
            dontCards : new Array()
   }
   
   var fivehands = {
           pair : 0,
           twopair :0,
           threeOfAkind : 0,
           straight : 0,
           flush : 0,
           fullhouse : 0,
           fourOfAkind : 0,
           straightflush : 0
   
   }
 
   
 //Visa en serie kort att välja ifrån    
  showAllCards();

  
  
   //Sektion för att välja kort till sin hand  
   //TVÅOR:  
   $('#h2').mouseup(function(){
                   
       $(this).hide();   
         cardpick.play();
           yourCard.cpick = "#h2"; yourCard.cnum = 52; yourCard.cname = "h2"; yourCard.aliasname = "ch2";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);   
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
           }); 
           
    $('#d2').mouseup(function(){
             $(this).hide(); 
             cardpick.play();
           yourCard.cpick = "#d2"; yourCard.cnum = 51; yourCard.cname = "d2"; yourCard.aliasname = "cd2";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s2').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#s2";
           yourCard.cnum = 50;
           yourCard.cname = "s2";
           yourCard.aliasname = "cs2";
           yourCard.num++;
          console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c2').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#c2";
           yourCard.cnum = 49;
           yourCard.cname = "c2";
           yourCard.aliasname = "cc2";
           yourCard.num++;
          console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
    
   //TREOR
   $('#h3').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#h3";
           yourCard.cnum = 48;
           yourCard.cname = "h3";
           yourCard.aliasname = "ch3";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d3').mouseup(function(){
              $(this).hide(); 
              cardpick.play();
           yourCard.cpick = "#d3";
           yourCard.cnum = 47;
           yourCard.cname = "d3";
           yourCard.aliasname = "cd3";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s3').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#s3";
           yourCard.cnum = 46;
           yourCard.cname = "s3";
           yourCard.aliasname = "cs3";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c3').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#c3";
           yourCard.cnum = 45;
           yourCard.cname = "c3";
           yourCard.aliasname = "cc3";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
   
   //FYROR
     $('#h4').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#h4";
           yourCard.cnum = 44;
           yourCard.cname = "h4";
           yourCard.aliasname = "ch4";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d4').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#d4";
           yourCard.cnum = 43;
           yourCard.cname = "d4";
           yourCard.aliasname = "cd4";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s4').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#s4";
           yourCard.cnum = 42;
           yourCard.cname = "s4";
           yourCard.aliasname = "cs4";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c4').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#c4";
           yourCard.cnum = 41;
           yourCard.cname = "c4";
           yourCard.aliasname = "cc4";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
   //FEMMOR
      $('#h5').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#h5";
           yourCard.cnum = 40;
           yourCard.cname = "h5";
           yourCard.aliasname = "ch5";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d5').mouseup(function(){
              $(this).hide();  
              cardpick.play();
           yourCard.cpick = "#d5";
           yourCard.cnum = 39;
           yourCard.cname = "d5";
           yourCard.aliasname = "cd5";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s5').mouseup(function(){
               $(this).hide();  
               cardpick.play();
           yourCard.cpick = "#s5";
           yourCard.cnum = 38;
           yourCard.cname = "s5";
           yourCard.aliasname = "cs5";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c5').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#c5";
           yourCard.cnum = 37;
           yourCard.cname = "c5";
           yourCard.aliasname = "cc5";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
   //SEXOR
   $('#h6').mouseup(function(){
              $(this).hide(); 
              cardpick.play();
           yourCard.cpick = "#h6";
           yourCard.cnum = 36;
           yourCard.cname = "h6";
           yourCard.aliasname = "ch6";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d6').mouseup(function(){
              $(this).hide();  
              cardpick.play();
           yourCard.cpick = "#d6";
           yourCard.cnum = 35;
           yourCard.cname = "d6";
           yourCard.aliasname = "cd6";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s6').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#s6";
           yourCard.cnum = 34;
           yourCard.cname = "s6";
           yourCard.aliasname = "cs6";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c6').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#c6";
           yourCard.cnum = 33;
           yourCard.cname = "c6";
           yourCard.aliasname = "cc6";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
   //SJUOR
      $('#h7').mouseup(function(){
              $(this).hide(); 
              cardpick.play();
           yourCard.cpick = "#h7";
           yourCard.cnum = 32;
           yourCard.cname = "h7";
           yourCard.aliasname = "ch7";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d7').mouseup(function(){
              $(this).hide(); 
              cardpick.play();
           yourCard.cpick = "#d7";
           yourCard.cnum = 31;
           yourCard.cname = "d7";
           yourCard.aliasname = "cd7";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s7').mouseup(function(){
               $(this).hide();    
               cardpick.play();
           yourCard.cpick = "#s7";
           yourCard.cnum = 30;
           yourCard.cname = "s7";
           yourCard.aliasname = "cs7";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c7').mouseup(function(){
               $(this).hide();  
               cardpick.play();
           yourCard.cpick = "#c7";
           yourCard.cnum = 29;
           yourCard.cname = "c7";
           yourCard.aliasname = "cc7";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    //ÅTTOR
     $('#h8').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#h8";
           yourCard.cnum = 28;
           yourCard.cname = "h8";
           yourCard.aliasname = "ch8";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d8').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#d8";
           yourCard.cnum = 27;
           yourCard.cname = "d8";
           yourCard.aliasname = "cd8";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s8').mouseup(function(){
               $(this).hide();  
               cardpick.play();
           yourCard.cpick = "#s8";
           yourCard.cnum = 26;
           yourCard.cname = "s8";
           yourCard.aliasname = "cs8";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c8').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#c8";
           yourCard.cnum = 25;
           yourCard.cname = "c8";
           yourCard.aliasname = "cc8";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    //NIOR
     $('#h9').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#h9";
           yourCard.cnum = 24;
           yourCard.cname = "h9";
           yourCard.aliasname = "ch9";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d9').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#d9";
           yourCard.cnum = 23;
           yourCard.cname = "d9";
           yourCard.aliasname = "cd9";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s9').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#s9";
           yourCard.cnum = 22;
           yourCard.cname = "s9";
           yourCard.aliasname = "cs9";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c9').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#c9";
           yourCard.cnum = 21;
           yourCard.cname = "c9";
           yourCard.aliasname = "cc9";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
    
    //TIOR
       $('#h10').mouseup(function(){
              $(this).hide();   
              cardpick.play();
           yourCard.cpick = "#h10";
           yourCard.cnum = 20;
           yourCard.cname = "h10";
           yourCard.aliasname = "ch10";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d10').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#d10";
           yourCard.cnum = 19;
           yourCard.cname = "d10";
           yourCard.aliasname = "cd10";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s10').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#s10";
           yourCard.cnum = 18;
           yourCard.cname = "s10";
           yourCard.aliasname = "cs10";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c10').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#c10";
           yourCard.cnum = 17;
           yourCard.cname = "c10";
           yourCard.aliasname = "cc10";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });

   //KNEKT                  
   $('#h11').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#h11";
           yourCard.cnum = 16;
           yourCard.cname = "h11";
           yourCard.aliasname = "ch11";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d11').mouseup(function(){
              $(this).hide();   
              cardpick.play();
           yourCard.cpick = "#d11";
           yourCard.cnum = 15;
           yourCard.cname = "d11";
           yourCard.aliasname = "cd11";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s11').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#s11";
           yourCard.cnum = 14;
           yourCard.cname = "s11";
           yourCard.aliasname = "cs11";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c11').mouseup(function(){
               $(this).hide();  
               cardpick.play();
           yourCard.cpick = "#c11";
           yourCard.cnum = 13;
           yourCard.cname = "c11";
           yourCard.aliasname = "cc11";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
   //DAM   
   $('#h12').mouseup(function(){
              $(this).hide(); 
              cardpick.play();
           yourCard.cpick = "#h12";
           yourCard.cnum = 12;
           yourCard.cname = "h12";
           yourCard.aliasname = "ch12";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d12').mouseup(function(){
              $(this).hide(); 
              cardpick.play();
           yourCard.cpick = "#d12";
           yourCard.cnum = 11;
           yourCard.cname = "d12";
           yourCard.aliasname = "cd12";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s12').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#s12";
           yourCard.cnum = 10;
           yourCard.cname = "s12";
           yourCard.aliasname = "cs12";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c12').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#c12";
           yourCard.cnum = 9;
           yourCard.cname = "c12";
           yourCard.aliasname = "cc12";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    //KUNG
    $('#h13').mouseup(function(){
              $(this).hide();  
              cardpick.play();
           yourCard.cpick = "#h13";
           yourCard.cnum = 8;
           yourCard.cname = "h13";
           yourCard.aliasname = "ch13";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d13').mouseup(function(){
              $(this).hide();  
              cardpick.play();
           yourCard.cpick = "#d13";
           yourCard.cnum = 7;
           yourCard.cname = "d13";
           yourCard.aliasname = "cd13";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s13').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#s13";
           yourCard.cnum = 6;
           yourCard.cname = "s13";
           yourCard.aliasname = "cs13";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c13').mouseup(function(){
               $(this).hide();
               cardpick.play();
           yourCard.cpick = "#c13";
           yourCard.cnum = 5;
           yourCard.cname = "c13";
           yourCard.aliasname = "cc13";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    //ESS
     $('#h14').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#h14";
           yourCard.cnum = 4;
           yourCard.cname = "h14";
           yourCard.aliasname = "ch14";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   }); 
   
   $('#d14').mouseup(function(){
              $(this).hide();
              cardpick.play();
           yourCard.cpick = "#d14";
           yourCard.cnum = 3;
           yourCard.cname = "d14";
           yourCard.aliasname = "cd14";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
   
    $('#s14').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#s14";
           yourCard.cnum = 2;
           yourCard.cname = "s14";
           yourCard.aliasname = "cs14";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
    $('#c14').mouseup(function(){
               $(this).hide(); 
               cardpick.play();
           yourCard.cpick = "#c14";
           yourCard.cnum = 1;
           yourCard.cname = "c14";
           yourCard.aliasname = "cc14";
           yourCard.num++;
           console.log('Tryckte på id: ' + yourCard.cpick + " Nummer är: " + yourCard.cnum + 'NAMN: ' + yourCard.cname);
           drawGame.CardPicker(yourCard.cpick, yourCard.cnum, yourCard.cname, yourCard.aliasname, yourCard.num);                 
   });
  
 

//SEKTION FÖR FUNKTIONER
  
 //skapa objekt drawGame
var drawGame = { 
        
 //Funktion som ska visa vilka kort man valt och validera att man valt rätt antal kort för att sedan starta simulering 
CardPicker : function (cpick, cnum, cname, aliasname, num){
         
  $(cpick).click(function() { 
  
             if (drawGame.checkAntalValdaKort(num) == 0){  //checka för att man inte valt över 5 kort.
                 yourCard.yourFive[num] = cnum;
                 yourCard.yourFiveName[num] = cname;   
                 donts.dontCards.push(cnum);
               //  console.log('checkfunktion ger: ' + drawGame.checkAntalValdaKort(num) + ' NAMN: ' + cname);
               // console.log('donts kort är: ' +  donts.dontCards[0] + ', '+  donts.dontCards[1] + ', ' +  donts.dontCards[2] + ', ' +  donts.dontCards[3] + ', ' +  donts.dontCards[4]);       
                 var hello =   cname + " card style4 left cardMargin " + aliasname;
                 $('<p id="' + aliasname + '" ' + ' class="' + hello + '"></p>')     
                 .appendTo('.choosen');
             }

            //om valt 5 kort, starta spelet. 
            if(drawGame.checkAntalValdaKort2(num) == 1){
                    //Visa knapp för att börja spelet
                    $('<input id="deal" class="deal" type="button" value="Klicka här för att simulera spel. Det kan ta tid att simulera alla omgångarna."/>')
                    .css({'height' : '400px',
                            'width' : '500px',
                           'background-color' : '#333', 
                            'color' : '#fff',   
                            'position' : 'absolute',
                            'top' : '50px',
                            'left' : '195px',
                            'z-index' : '99',
                            'opacity' : '0.9'
                    }) 
                     .appendTo('#dealbuttom');
                     drawGame.dealcardsAndCountCardValue();
                }  
             });
          
  
  }, //close function

  //funktion för att slumpa händer till spelarna och räkna handvärdet.
dealcardsAndCountCardValue : function(){ 
        
      var dummygame = dummygame2 = $("#rounds").val(); 
      var playerNumber = 4;
      var handforhand = $("#handforhand").val(); 
      var diff;
      var winprocent, winprocent3, winprocent2, winprocent1;
      var myCardsNumber = 0;
      
     // alert('hello world' + yourCard.yourFive[0] + ', ' + yourCard.yourFive[1] + ', ' + yourCard.yourFive[2] + ', ' + yourCard.yourFive[3] + ', ' + yourCard.yourFive[4]);          
    
      
       //Vad som händer när man trycker på deal-knappen      
       $('.deal').click(function(){
            $('.deal').remove();
            
       
        console.log('SHUFFLE UP AND DEAL'); 
                  
      //Här börjar loop för att spela önskat antal omgångar. 
      for(var gameloop = dummygame; gameloop>0; gameloop--){
          
            diff = dummygame2-dummygame;
            loadsound.play();
            
              
               //Sektion för nollställnig
               $("#comp1, #comp2, #comp3, #comp4, #yours").empty();
               $("#yres, #c1res, #c2res, #c3res, #c4res").empty();
               $("#yresname, #c1resname, #c2resname, #c3resname, #c4resname").empty();
               $("#load").empty();
               $("#bkgPlayGame").hide();
               
              
       donts.dontCards.length = 0;  //nollställa kort som inte får väljas.
          for(var i = 0; i<5;i++){ //lägg till användarens valda kort bland dont-kort.
                  donts.dontCards[i] = yourCard.yourFive[i];
          }
          
 
       yourCard.yourFive.sort(function(a, b){return a-b}); //sortera spelarens kort.
           
       for(var i = 0;i<5;i++){
               yourCard.yourFiveName[i] = drawGame.cardName(yourCard.yourFive[i]); 
                $('<div class="card style14 left cardMargin2 ' + yourCard.yourFiveName[i] + '"></div>')
               .appendTo('#yours');
       }   
  
       //Slumpa kort till motspelarna.
       if(playerNumber>0){
               for(var i = 0;i<5;i++){
               comp1.c1five[i] = drawGame.randomDeal(deck, donts.dontCards).number;
                 donts.dontCards.push(comp1.c1five[i]); //lägg nummret i array för nummer som inte ska väljas igen.
               }
               
                comp1.c1five.sort(function(a, b){return a-b}); //sorterar korten i ordning
            //    alert('Nummer är ' +  comp1.c1five[0] +', ' +  comp1.c1five[1] +', ' +  comp1.c1five[2] +', ' +  comp1.c1five[3] +', ' +  comp1.c1five[4])
                for(var i = 0;i<5;i++){
                 comp1.c1fiveName[i] = drawGame.cardName(comp1.c1five[i]);   
               $('<div class="card style14 left cardMargin2 ' + comp1.c1fiveName[i] + '"></div>')
               .appendTo('#comp1'); 
               
               }
          //     alert('Namn är ' +  comp1.c1fiveName[0] +', ' +  comp1.c1fiveName[1] +', ' +  comp1.c1fiveName[2] +', ' +  comp1.c1fiveName[3] +', ' +  comp1.c1fiveName[4])
            //   console.log('SORTERAR COMP 1:' + comp1.c1five[0] + ', '  + comp1.c1five[0] + ', '  + comp1.c1five[1] + ', '  + comp1.c1five[2] + ', '  + comp1.c1five[3] + ', '  + comp1.c1five[4]); 
       } 
       
         if(playerNumber>1){ 
               for(var i = 0;i<5;i++){
                       comp2.c2five[i] = drawGame.randomDeal(deck, donts.dontCards).number;
                       donts.dontCards.push(comp2.c2five[i]); //lägg nummret i array för nummer som inte ska väljas igen.
               }
               comp2.c2five.sort(function(a, b){return a-b}); //sorterar korten i ordning
               
               for(var i = 0;i<5;i++){
                       comp2.c2fiveName[i] = drawGame.cardName(comp2.c2five[i]);
                       $('<div class="card style14 left cardMargin2 ' + comp2.c2fiveName[i] + '"></div>').appendTo('#comp2'); 
     
               }  
       }
       
         if(playerNumber>2){
                for(var i = 0;i<5;i++){
                        comp3.c3five[i] = drawGame.randomDeal(deck, donts.dontCards).number;
                        donts.dontCards.push(comp3.c3five[i]);
                }
                 comp3.c3five.sort(function(a, b){return a-b}); //sorterar korten i ordning
                 for(var i = 0;i<5;i++){
                         comp3.c3fiveName[i] = drawGame.cardName(comp3.c3five[i]);
                         $('<div class="card style14 left cardMargin2 ' + comp3.c3fiveName[i] + '"></div>').appendTo('#comp3'); 
     
               }     
       }
       
       if(playerNumber>3){
                 for(var i = 0;i<5;i++){
                         comp4.c4five[i] = drawGame.randomDeal(deck, donts.dontCards).number;
                         donts.dontCards.push(comp4.c4five[i]);
                 }
                 comp4.c4five.sort(function(a, b){return a-b}); //sorterar korten i ordning
                 
                 for(var i = 0;i<5;i++){
                         comp4.c4fiveName[i] = drawGame.cardName(comp4.c4five[i]);
                          $('<div class="card style14 left cardMargin2 ' + comp4.c4fiveName[i] + '"></div>').appendTo('#comp4'); 
     
               }    
       }

               //Sektion för att plussa ihop värden på händerna spelarna fått.
     
               //Beräkna värdet på handen (färstege blir stege + färg)
             yourCard.yourHand = drawGame.par(yourCard.yourFive, deck) + drawGame.twopairs(yourCard.yourFive, deck) + drawGame.trips(yourCard.yourFive, deck) + drawGame.straight(yourCard.yourFive, deck) + drawGame.color(yourCard.yourFive, deck) + drawGame.fullhouse(yourCard.yourFive, deck) + drawGame.fourOfAkind(yourCard.yourFive, deck);
             comp1.c1hand = drawGame.par(comp1.c1five, deck) + drawGame.twopairs(comp1.c1five, deck) + drawGame.trips(comp1.c1five, deck) + drawGame.straight(comp1.c1five, deck) + drawGame.color(comp1.c1five, deck) + drawGame.fullhouse(comp1.c1five, deck) + drawGame.fourOfAkind(comp1.c1five, deck);  
             comp2.c2hand = drawGame.par(comp2.c2five, deck) + drawGame.twopairs(comp2.c2five, deck) + drawGame.trips(comp2.c2five, deck) + drawGame.straight(comp2.c2five, deck) + drawGame.color(comp2.c2five, deck) + drawGame.fullhouse(comp2.c2five, deck) + drawGame.fourOfAkind(comp2.c2five, deck);  
             comp3.c3hand = drawGame.par(comp3.c3five, deck) + drawGame.twopairs(comp3.c3five, deck) + drawGame.trips(comp3.c3five, deck) + drawGame.straight(comp3.c3five, deck) + drawGame.color(comp3.c3five, deck) + drawGame.fullhouse(comp3.c3five, deck) + drawGame.fourOfAkind(comp3.c3five, deck);   
             comp4.c4hand = drawGame.par(comp4.c4five, deck) + drawGame.twopairs(comp4.c4five, deck) + drawGame.trips(comp4.c4five, deck) + drawGame.straight(comp4.c4five, deck) + drawGame.color(comp4.c4five, deck) + drawGame.fullhouse(comp4.c4five, deck) + drawGame.fourOfAkind(comp4.c4five, deck);  
            // alert('Ditt värde: ' + yourCard.yourHand + ' ::: Motspelarnas värden är: comp 1: ' + comp1.c1hand + ', comp 2: ' +  comp2.c2hand  + ', comp 3: ' +  comp3.c3hand  + ', comp 4: ' +  comp4.c4hand + ':::');
             
             //Jämför händer för att se vilken av två händer som är "lika" som egentligen är störst (vem som har högsta sidokort).
            yourCard.yourHand += 
            drawGame.compare(yourCard.yourHand, comp1.c1hand, yourCard.yourFive, comp1.c1five) + 
            drawGame.compare(yourCard.yourHand, comp2.c2hand, yourCard.yourFive, comp2.c2five) + 
            drawGame.compare(yourCard.yourHand, comp3.c3hand, yourCard.yourFive, comp3.c3five) + 
            drawGame.compare(yourCard.yourHand, comp4.c4hand, yourCard.yourFive, comp4.c4five);
            
            comp1.c1hand += 
            drawGame.compare(comp1.c1hand, yourCard.yourHand, comp1.c1five, yourCard.yourFive) + 
            drawGame.compare(comp1.c1hand, comp2.c2hand, comp1.c1five, comp2.c2five) + 
            drawGame.compare(comp1.c1hand, comp3.c3hand, comp1.c1five, comp3.c3five) +
            drawGame.compare(comp1.c1hand, comp4.c4hand, comp1.c1five, comp4.c4five);
            
            comp2.c2hand += 
            drawGame.compare(comp2.c2hand, yourCard.yourHand, comp2.c2five, yourCard.yourFive) + 
            drawGame.compare(comp2.c2hand, comp1.c1hand, comp2.c2five, comp1.c1five) + 
            drawGame.compare(comp2.c2hand, comp3.c3hand, comp2.c2five, comp3.c3five) +
            drawGame.compare(comp2.c2hand, comp4.c4hand, comp2.c2five, comp4.c4five);
            
            comp3.c3hand += 
            drawGame.compare(comp3.c3hand, yourCard.yourHand, comp3.c3five, yourCard.yourFive) + 
            drawGame.compare(comp3.c3hand, comp1.c1hand, comp3.c3five, comp1.c1five) + 
            drawGame.compare(comp3.c3hand, comp2.c2hand, comp3.c3five, comp2.c2five) +
            drawGame.compare(comp3.c3hand, comp4.c4hand, comp3.c3five, comp4.c4five);
            
            comp4.c4hand += 
            drawGame.compare(comp4.c4hand, yourCard.yourHand, comp4.c4five, yourCard.yourFive) + 
            drawGame.compare(comp4.c4hand, comp1.c1hand, comp4.c4five, comp1.c1five) + 
            drawGame.compare(comp4.c4hand, comp2.c2hand, comp4.c4five, comp2.c2five) +
            drawGame.compare(comp4.c4hand, comp3.c3hand, comp4.c4five, comp3.c3five);
            
            
           /** alert('Ditt värde: ' + yourCard.yourHand + ' Comp1: ' + comp1.c1hand + ' Comp2: ' + comp2.c2hand
                    + ' Comp3: ' + comp3.c3hand + ' Comp4: ' + comp4.c4hand);
            */
   
                   
        
          //Beräkna antalet gånger spelaren vunnit
          //Mot 4 spelare.
          if(yourCard.yourHand > comp1.c1hand && yourCard.yourHand > comp2.c2hand  && yourCard.yourHand > comp3.c3hand && yourCard.yourHand > comp4.c4hand){
                  yourCard.allWins++;
                //  alert('vinst');
          }
         //mot 3 spelare 
         if(yourCard.yourHand > comp1.c1hand && yourCard.yourHand > comp2.c2hand  && yourCard.yourHand > comp3.c3hand){
                 yourCard.allWins3++; 
         }
         //mot 2 spelare
         if(yourCard.yourHand > comp1.c1hand && yourCard.yourHand > comp2.c2hand ){
                 yourCard.allWins2++;
         }
         
         //mot 1 spelare
         if(yourCard.yourHand > comp1.c1hand){
                 yourCard.allWins1++;
         } 
       
         //
       
       //  $("#pararesult").html(fivehands.pair + ', ');
         
          winprocent = yourCard.allWins/dummygame2*100;
          winprocent3 = yourCard.allWins3/dummygame2*100; 
          winprocent2 = yourCard.allWins2/dummygame2*100; 
          winprocent1 = yourCard.allWins1/dummygame2*100; 
          diff = dummygame2-gameloop+1; 
         
        
          
               //hand-för-hand-läge
                if(handforhand == "yes") { 
                            $("#yres").html('#' + drawGame.compareFiveHands(yourCard.yourHand, comp1.c1hand, comp2.c2hand, comp3.c3hand, comp4.c4hand));
                    $("#yresname").html(drawGame.handName(yourCard.yourFive, deck));
                    
                    //Visa plats och hand.
                    $("#c1resname").html(drawGame.handName(comp1.c1five, deck));
                    $("#c2resname").html(drawGame.handName(comp2.c2five, deck));
                    $("#c3resname").html(drawGame.handName(comp3.c3five, deck));
                    $("#c4resname").html(drawGame.handName(comp4.c4five, deck));
                    $("#c1res").html('#' + drawGame.compareFiveHands(comp1.c1hand, yourCard.yourHand, comp2.c2hand, comp3.c3hand, comp4.c4hand));
                    $("#c2res").html('#' + drawGame.compareFiveHands(comp2.c2hand, comp1.c1hand, yourCard.yourHand, comp3.c3hand, comp4.c4hand));
                    $("#c3res").html('#' + drawGame.compareFiveHands(comp3.c3hand, comp2.c2hand, comp1.c1hand, yourCard.yourHand, comp4.c4hand));
                    $("#c4res").html('#' + drawGame.compareFiveHands(comp4.c4hand, comp3.c3hand, comp2.c2hand, comp1.c1hand, yourCard.yourHand));
                          
                    
                     //visa resultat       
                    drawGame.resultOutput(winprocent, winprocent3, winprocent2, winprocent1, diff);
                    
                       if (confirm('Spelrunda: ' + diff + '\nDin placering: ' + drawGame.compareFiveHands(yourCard.yourHand, comp1.c1hand, comp2.c2hand, comp3.c3hand, comp4.c4hand)) == true) {
                               handforhand = "yes"
                       } else {
                              handforhand = "no";}
                   };  
           
          // dummygame--;
     } //close game-for-loop
     
      console.log('Dina valda kort: ' + yourCard.yourFive[0] + ', ' + yourCard.yourFive[1] + ', ' + yourCard.yourFive[2] + ', ' + yourCard.yourFive[3] + ', ' + yourCard.yourFive[4]);
      console.log('Comp1:s valde kort: ' + comp1.c1five[0] + ',' +  comp1.c1five[1] + ',' +  comp1.c1five[2] + ',' +  comp1.c1five[3] + ',' +  comp1.c1five[4]); 
      console.log('Comp2:s valde kort: ' + comp2.c2five[0] + ',' +  comp2.c2five[1] + ',' +  comp2.c2five[2] + ',' +  comp2.c2five[3] + ',' +  comp2.c2five[4]); 
      console.log('Comp3:s valde kort: ' + comp3.c3five[0] + ',' +  comp3.c3five[1] + ',' +  comp3.c3five[2] + ',' +  comp3.c3five[3] + ',' +  comp3.c3five[4]); 
      console.log('Comp4:s valde kort: ' + comp4.c4five[0] + ',' +  comp4.c4five[1] + ',' +  comp4.c4five[2] + ',' +  comp4.c4five[3] + ',' +  comp4.c4five[4]);                      

                           //   });    
         //   }
         
          $("#yres").html('#' + drawGame.compareFiveHands(yourCard.yourHand, comp1.c1hand, comp2.c2hand, comp3.c3hand, comp4.c4hand));
                    $("#yresname").html(drawGame.handName(yourCard.yourFive, deck));
              
            //Visa plats och hand.
                    $("#c1resname").html(drawGame.handName(comp1.c1five, deck));
                    $("#c2resname").html(drawGame.handName(comp2.c2five, deck));
                    $("#c3resname").html(drawGame.handName(comp3.c3five, deck));
                    $("#c4resname").html(drawGame.handName(comp4.c4five, deck));
                    $("#c1res").html('#' + drawGame.compareFiveHands(comp1.c1hand, yourCard.yourHand, comp2.c2hand, comp3.c3hand, comp4.c4hand));
                    $("#c2res").html('#' + drawGame.compareFiveHands(comp2.c2hand, comp1.c1hand, yourCard.yourHand, comp3.c3hand, comp4.c4hand));
                    $("#c3res").html('#' + drawGame.compareFiveHands(comp3.c3hand, comp2.c2hand, comp1.c1hand, yourCard.yourHand, comp4.c4hand));
                    $("#c4res").html('#' + drawGame.compareFiveHands(comp4.c4hand, comp3.c3hand, comp2.c2hand, comp1.c1hand, yourCard.yourHand));
                          
          //visa output på sannolikheter.          
         drawGame.resultOutput(winprocent, winprocent3, winprocent2, winprocent1, diff);
        
         //Vad som händer när man stänger resultatboxen.
            $('#playGame').dblclick(function(){ //annorlunda callback...
                            $('#playGame').hide();
                            $("#bkgPlayGame").hide();
                             $('.showCards').calculateFiveCardOdds(deck); //starta om
                });
            
           //eller tryck esc. 
           $(document).on( 'keydown', function (e) {
                           if ( e.keyCode === 27 ) { 
                                   $('#playGame, #bkgPlayGame').hide();
                                    $('.showCards').calculateFiveCardOdds(deck); //starta om
               }
           }); 
               
  });
 }, //avsluta funktion
  

 
 //Kontrollera att man inte valt fler än 5 kort
 checkAntalValdaKort : function(valda){
          if(valda>4)
                  return 1;
          else{
          return 0;}  
  },
  
   //Kontrollera att man valt 5 kort
 checkAntalValdaKort2 : function (valda){
          if(valda==4)
                  return 1;
          else{
          return 0;}  
  },

  
 
 //Slumpa tal, men inte nots-nummer. Param: nots: array.  
 randomDeal : function (antal, nots){
      
        var randomloop = 0, p = 0;
        while(randomloop == 0){
                p = 0;       
                var randnum = Math.floor(Math.random() * (antal - 1 + 1)) + 1;   
              //  console.log('SLUMPTAL ÄR: ' + randnum);
      
              /**  console.log('Notts: ' + nots[0] + ', ' + nots[1] + ', ' + nots[2] + ', ' + nots[3] + ', ' + nots[4] + ', '
                                   + nots[5] + ', ' + nots[6] + ', ' + nots[7] + ', ' + nots[8] + ', ' + nots[9] + ', '   
                                     + nots[10] + ', ' + nots[11] + ', ' + nots[12] + ', ' + nots[13] + ', ' + nots[14] + ', '  
                                     + nots[15] + ', ' + nots[16] + ', ' + nots[17] + ', ' + nots[18] + ', ' + nots[19]  + ', '
                                      + nots[20] + ', ' + nots[21] + ', ' + nots[22] + ', ' + nots[23] + ', ' + nots[24] + ', '
                                     );*/
         
         for(var y = 0; y<nots.length; y++){
                //  console.log('Nots är: ' + nots[y]);
                 if(randnum == nots[y]){
                         p = 1;
                       //  console.log('TAL HADE REDAN VALTS : ' + randnum + ' i är:' + y);
                                    
                 }
         } //close for-loop.  
        
       // console.log('TAL SOM VÄLJS ' + randnum);
        if(p == 0) {
                return cardobj = { //testa att returnera objekt
                        number : randnum}
        }
             
             } //avsluta while-loop
}, //close function
  
 
 //Visa kortnamn för slumpat nummer.
 cardName : function cardName(number){
      var cardNameString = "";  
      if(number == 52){return cardNameString = "h2";}
      if(number == 51){return cardNameString = "d2";}        
      if(number == 50){return cardNameString = "s2";}             
      if(number == 49){return cardNameString = "c2";}  
      
      if(number == 48){return cardNameString = "h3";}
      if(number == 47){return cardNameString = "d3";}        
      if(number == 46){return cardNameString = "s3";}             
      if(number == 45){return cardNameString = "c3";}          
      
      if(number == 44){return cardNameString = "h4";}
      if(number == 43){return cardNameString = "d4";}        
      if(number == 42){return cardNameString = "s4";}             
      if(number == 41){return cardNameString = "c4";}    
      
      if(number == 40){return cardNameString = "h5";}
      if(number == 39){return cardNameString = "d5";}        
      if(number == 38){return cardNameString = "s5";}             
      if(number == 37){return cardNameString = "c5";}   
      
      if(number == 36){return cardNameString = "h6";}
      if(number == 35){return cardNameString = "d6";}        
      if(number == 34){return cardNameString = "s6";}             
      if(number == 33){return cardNameString = "c6";}  
      
      if(number == 32){return cardNameString = "h7";}
      if(number == 31){return cardNameString = "d7";}        
      if(number == 30){return cardNameString = "s7";}             
      if(number == 29){return cardNameString = "c7";}
      
      if(number == 28){return cardNameString = "h8";}
      if(number == 27){return cardNameString = "d8";}        
      if(number == 26){return cardNameString = "s8";}             
      if(number == 25){return cardNameString = "c8";}
      
      if(number == 24){return cardNameString = "h9";}
      if(number == 23){return cardNameString = "d9";}        
      if(number == 22){return cardNameString = "s9";}             
      if(number == 21){return cardNameString = "c9";}
      
      if(number == 20){return cardNameString = "h10";}
      if(number == 19){return cardNameString = "d10";}        
      if(number == 18){return cardNameString = "s10";}             
      if(number == 17){return cardNameString = "c10";}
      
      if(number == 16){return cardNameString = "h11";}
      if(number == 15){return cardNameString = "d11";}        
      if(number == 14){return cardNameString = "s11";}             
      if(number == 13){return cardNameString = "c11";}
      
      if(number == 12){return cardNameString = "h12";}
      if(number == 11){return cardNameString = "d12";}        
      if(number == 10){return cardNameString = "s12";}             
      if(number == 9){return cardNameString = "c12";}
      
      if(number == 8){return cardNameString = "h13";}
      if(number == 7){return cardNameString = "d13";}        
      if(number == 6){return cardNameString = "s13";}             
      if(number == 5){return cardNameString = "c13";}
      
      if(number == 4){return cardNameString = "h14";}
      if(number == 3){return cardNameString = "d14";}        
      if(number == 2){return cardNameString = "s14";}             
      if(number == 1){return cardNameString = "c14";}
        
},

//Räkna antalet av en valör på en hand,
antalIintervall : function (hand, intervallstart, intervallstop){
   var dummy = 0;
   for(var i = 0; i<5;i++){
           if(hand[i] >= intervallstart && hand[i] <= intervallstop)
                   dummy++;                     
   }
    return dummy;    
        
},

//räkna par och returnerar ett rankvärde för paret.
par : function (hand, decksize){
     var par = par2 = triss2 = 0;
     var start = stop = 0;
    // console.log('RÄKNAR PAR');
 
    for(var i = 0; i<=(decksize/4-1);i++){
         start = (i*4)+1;
         stop =  (i*4)+4;
      
       //  alert('intervall från: ' + start + ', till: ' + stop);
        if(drawGame.antalIintervall(hand, start, stop) == 2){
                par = (decksize/4-i); //sätta värde på paret
                par2++; //räkna antalet par.
        } 

        if(drawGame.antalIintervall(hand, start, stop) == 3){
                triss2++;
        }  
     } //end for-loop.
     
    /*  alert('RÄKNA PAR' + ' par: ' + par + ' 2par: ' + par2 + ' triss: ' + triss2
              + ' kortstorlek: ' + decksize + ' i varje valör: ' + (decksize/4+1) + 
              'ta minus: '+ (decksize/4-1));*/
      
     if(par2 == 1 && triss2 == 0){
            //  alert('par2 är 1 och triss2 är 0');
             return par; //returnerar ett värde på paret.
            }
     else
             return 0;   
    
},//close function

//räkna tvåpar och returnerar rangvärde. 
twopairs : function (hand, decksize){
     var par2 = 0, index = 0;
     var start = stop = 0;
     var par = [0,0]; //för att lägga parvärderna, och för att kunna avgöra att t.ex. KK88 är högre än KK77
        
      for(var i = 0; i<=(decksize/4-1);i++){
              start = (i*4)+1;
              stop =  (i*4)+4;
              
              if(drawGame.antalIintervall(hand, start, stop) == 2){
                par[index] = (decksize/4-i); //sätta värde till paret
                    index++;
                    par2++;
        }               
      } //close for-loop
      
      if(par2 == 2){
           //   alert('tvåpar');
              return 13+par[0]+(par[1]/par[0]);  //ska göra att KK88 får högre värde än KK77     
      }
      else
        return 0;      


}, //close function

//räknar triss och returnerar rangvärde för trisset
trips : function (hand, decksize){
    var triss = par = triss2 = 0;
    
    for(var i = 0; i<=(decksize/4-1);i++){
              start = (i*4)+1;
              stop =  (i*4)+4;
              if(drawGame.antalIintervall(hand, start, stop) == 2){
                      par++;
              }
               if(drawGame.antalIintervall(hand, start, stop) == 3){
                       triss++;
                    triss2 = 27+(decksize/4-i);
               }
              
    } //close for-loop
    
    if(par == 0 && triss == 1){
          //  alert('return triss med värde: ' + triss2)
            return triss2;
            }
    else
        return 0;   
        
}, //close function

//räknar kåk och returnerar rangvärde för kåken
fullhouse : function (hand, decksize){
    triss = par = dummy = 0;    
    
     for(var i = 0; i<=(decksize/4-1);i++){
              start = (i*4)+1;
              stop =  (i*4)+4;
              if(drawGame.antalIintervall(hand, start, stop) == 3){
                      triss = (decksize/4-i);
              }
               if(drawGame.antalIintervall(hand, start, stop) == 2){
                      par = (decksize/4-i);
              }               
    } //close for-loop
    
   if(triss>0 && par>0){
           //  alert('return kåk med värde: ' + triss2)
               return 51 + triss + (par/triss);
   }
    else
        return 0;     
        
}, //close function

//räknar fyrtal och returnerar rangvärde för fyrtalet
fourOfAkind : function(hand, decksize){
        var fyrtal = 0;
        
        for(var i = 0; i<=(decksize/4-1);i++){
              start = (i*4)+1;
              stop =  (i*4)+4;
              if(drawGame.antalIintervall(hand, start, stop) == 4){
                      fyrtal = 65+(decksize/4-i);       
              }    
        } //close for-loop
       
        if(fyrtal>0)
                return fyrtal;
        else
                return 0; 
        
},  //close funktion
  
         

//räknar stege och returnerar rangvärde för handen
straight : function(hand, decksize){
      var stege = 0, dummy=0, fordummy = 0;
      
      //36 kort; lägsta stegen A-9
      if (decksize == 36 && drawGame.antalIintervall(hand, 0,4) == 1 && drawGame.antalIintervall(hand, 33, 36) == 1  && drawGame.antalIintervall(hand, 29, 32) == 1 && drawGame.antalIintervall(hand, 25, 28) == 1 && drawGame.antalIintervall(hand, 21, 24) == 1 ){
         stege = 41;
       //  alert('stege A9');
      }
      
       //32 kort; lägsta stegen A-T
      if (decksize == 32 && drawGame.antalIintervall(hand, 0,4) == 1 && drawGame.antalIintervall(hand, 29, 32) == 1 && drawGame.antalIintervall(hand, 25, 28) == 1 && drawGame.antalIintervall(hand, 21, 24) == 1 && drawGame.antalIintervall(hand, 17, 20) == 1){
         stege = 41;
        // alert('stege AT');
      }
      
      //52 kort; lägsta stegen A-5
      if (decksize == 52 && drawGame.antalIintervall(hand, 0,4) == 1 && drawGame.antalIintervall(hand, 49, 52) == 1 && drawGame.antalIintervall(hand, 45, 48) == 1 && drawGame.antalIintervall(hand, 41, 44) == 1 && drawGame.antalIintervall(hand, 37, 40) == 1){
         stege = 41;
       //  alert('stege A5');
      }
      
      //övriga stegar
      for(var i = 0; i<=13;i++){
        dummy++;
        if (drawGame.antalIintervall(hand, 49-(i*4), 52-(i*4)) == 1 && drawGame.antalIintervall(hand, 45-(i*4), 48-(i*4)) == 1 && drawGame.antalIintervall(hand, 41-(i*4), 44-(i*4)) == 1 && drawGame.antalIintervall(hand, 37-(i*4), 40-(i*4)) == 1 && drawGame.antalIintervall(hand, 33-(i*4), 36-(i*4)) == 1){
         stege = 41+dummy;
         }
      } 
      
     if (stege>0)
           return stege;
        else
            return 0;  
        
}, //close function

//räknar färg och returnerar rangvärde för handen
color : function(hand, decksize){
        var hjarter = 0, ruter = 0, klover = 0, spader = 0, farg = 0;
       
        for(var i = 0; i<(decksize/4+1);i++){
              if (hand[0] == ((decksize+1) - (i*4)) || hand[1] == (decksize+1 - (i*4)) || hand[2] == (decksize+1 - (i*4)) || hand[3] == (decksize+1 - (i*4)) || hand[4] == (decksize+1 - (i*4))) {
                 hjarter++;
                 }
     
                 if (hand[0] == ((decksize+2) - (i*4)) || hand[1] == ((decksize+2) - (i*4)) || hand[2] == ((decksize+2) - (i*4)) || hand[3] == ((decksize+2) - (i*4)) || hand[4] == ((decksize+2) - (i*4))) {
                 ruter++;
                 }
                 if (hand[0] == ((decksize+3) - (i*4)) || hand[1] == ((decksize+3) - (i*4)) || hand[2] == ((decksize+3) - (i*4)) || hand[3] == ((decksize+3) - (i*4)) || hand[4] == ((decksize+3) - (i*4))) {
                 spader++;
                 }
     
                 if (hand[0] == ((decksize+4) - (i*4)) || hand[1] == ((decksize+4) - (i*4)) || hand[2] == ((decksize+4) - (i*4)) || hand[3] == ((decksize+4) - (i*4)) || hand[4] == ((decksize+4) - (i*4))) {
                 klover++;
                 }  
          }
          
         if (hjarter == 5 || ruter == 5 || klover == 5 || spader == 5){
        
                 if (decksize == 52)
                         return farg = 51;
                 if (decksize < 37) //Färg är värd mer än kåk om 36 eller färre kort i kortleken.
                         return farg = 65;  
         }
      
      else
          return 0;         
}, //close function      


//jämför sorterade händer för att ta reda vilken av de som har samma värde som har högsta sidokortet.
compare : function(handvalue1, handvalue2, hand1, hand2){  
        
        var handy1dum = [0,0,0,0,0];
        var handy2dum = [0,0,0,0,0];
        
        for(var i = 0; i<5; i++){
                //tänkt att överföra slumptalen till kortvärdet.
             for(var p = 1; p<14; p++){   
                if(hand1[i] <=(p*4) && hand1[i] >=(p*4-3)){handy1dum[i] = p;}; 
                if(hand2[i] <=(p*4) && hand2[i] >=(p*4-3)){handy2dum[i] = p;};  
             }   
        } //end first for
      
          
        if(handvalue1 == handvalue2){
                if(handy1dum[0] > handy2dum[0]){return -0.01;}
                if(handy1dum[0] < handy2dum[0]){return 0.01;}    
                
                if(handy1dum[1] > handy2dum[1]){return -0.01;}
                if(handy1dum[1] < handy2dum[1]){return 0.01;} 
                
                if(handy1dum[2] > handy2dum[2]){return -0.01;}
                if(handy1dum[2] < handy2dum[2]){return 0.01;} 
                
                if(handy1dum[3] > handy2dum[3]){return -0.01;}
                if(handy1dum[3] < handy2dum[3]){return 0.01;} 
                
                if(handy1dum[4] > handy2dum[4]){return -0.01;}
                if(handy1dum[4] < handy2dum[4]){return 0.01;} 
        }
        else 
                return 0;
},

compareFiveHands : function(a1, b1, c1, d1, e1){  
        var max = 0;
        if(a1>b1)
           max++;
        if(a1>c1)
           max++;
        if(a1>d1)
           max++;
        if(a1>e1)
           max++;
   
   
        if (max == 4)
           return 1;
        if (max == 3)
           return 2;
        if (max == 2)
           return 3;
        if (max == 1)
           return 4;
        if (max == 0)
           return 5;
        

}, //close function

//Funktion för att returnera namn på handen.
handName : function(hand, decksize){
        var handyname = "Skräp";
        if(drawGame.par(hand, decksize)>0){handyname = "Par";};
        if(drawGame.twopairs(hand, decksize)>0){handyname = "2-par";};
        if(drawGame.trips(hand, decksize)>0){handyname = "Triss";};
        if(drawGame.straight(hand, decksize)>0){handyname = "Stege";};
        if(drawGame.color(hand, decksize)>0){handyname = "Färg";};
        if(drawGame.fullhouse(hand, decksize)>0){handyname = "Kåk";};
        if(drawGame.fourOfAkind(hand, decksize)>0){handyname = "Fyrtal";};
        if(drawGame.color(hand, decksize)>0 && drawGame.straight(hand, decksize)>0){handyname = "Färgstege";};
        
        return handyname;
        
        
        
},//close function 

whatsOnHand : function(what, handA, handB, handC, handD, handE){
         if(handA>what || handB>what || handC>what || handD>what || handE>what)
                 return 1;
         else
                 return 0;
               
              
              
},//close function         

//function som visar Resultat i lightbox.
resultOutput : function(winprocent, winprocent3, winprocent2, winprocent1, diff){         
      var docwith = $(document).width();
      var docheight = $(document).height();
      
      $( document ).on( "mousemove", function( event ) {
                   
       //resultatbox som går att flytta på               
        $("#gameresult").html("<p><b>FLYTTBAR RESULTATBOX<br/><br/></b>Efter " + diff + " giv, hur ofta din hand var bäst mot (räknar inte lika):<br/> <br/>4:a spelare: <b>" 
                   + winprocent.toFixed(1) + " % </b> (mot cp1,cp2,cp3,cp4): <br/> 3 spelare: <b>" + winprocent3.toFixed(1) + " % </b> (mot cp1,cp2,cp3): <b> </b><br/> 2 spelare: <b>"+ winprocent2.toFixed(1) + " %  </b>  (mot cp1, cp2): <br/> 1 spelare: <b>"+ winprocent1.toFixed(1) + " %</b> (mot cp1): <br/><br/></p>" )
        $( document ).on("click", function(){$("#gameresult").css({'z-index' : '99', 'position' : 'absolute', 'top' : event.pageY-250, 'left' : event.pageX-600})});
        
      });
      
      
       
       
           
           //om man visar hand-för-hand-läge
       //   if(handforhand == "yes") {
              $('#playGame').show().css({
                                  'width' : '500px',  
                                  'height' : '500px', 
                                  'color' : 'black', 
                                  'padding' : '20px',
                                  'border' : '1px solid #000',
                                  'border-radius' : '25px',
                                  'box-shadow' : '10px 10px 5px #888888',
                                  'position' : 'absolute',
                                  'top' : '150px',
                                  'left' : '450px',
                                  'background-color' : '#fff',
                                  'z-index' : '99',
                                  'opacity' : '0.9'
                                 
                               });
              
               $('#bkgPlayGame').css({ 'background-color' : '#000', 'z-index' : '1', 'width' : docwith, 'height' : docheight, 'position' : 'absolute', 'top' : '0px', 'left' : '0px', 'color' : '#fff', 'opacity' : '0.8'}).show('fast');
} //close function.     





} //close drawgame objekt    


//Sektion för fristående funktioner

//funktion för att visa uppsättning av kort som går att välja ifrån.
function showAllCards(){
       var h = "h", d= "d", s = "s", k = "c", c, e, f, g;    
          var innerStyle;  
      for(var i = 14;i>=LowestCard;i--){ //i>0 ska välja sedan över vilket kort.
             c = h+i; e = s+i; f = d+i;g = k+i;
             innerStyle = "float:left;";   
             var classCard = c + " card style4 left cardMargin";
             var spader = e + " card style4 left cardMargin";
             var diamond = f + " card style4 left cardMargin";
             var club = g + " card style4 left cardMargin";
             
         //  console.log('Initierade ' + c + ' klasser är: ' + classCard);    
      
         //outprinta kort              
      $('<input id="' + c + '" class="' + classCard + '"' + 'style="' + innerStyle + '"' +
              'type="button" value="' + c + '"/>')      
     .appendTo('.showCards');
     $('<input id="' + e + '" class="' + spader + '"' + 'type="button" value="' + e + '"/>') 
     .appendTo('.showCards');
       $('<input id="' + f + '" class="' + diamond + '"' + 'type="button" value="' + f + '"/>')   
     .appendTo('.showCards');
      $('<input id="' + g + '" class="' + club + '"' + 'type="button" value="' + g + '"/>')     
     .appendTo('.showCards');
     
      } //close for-loop
  } //close function



  
 //}); //close click-card...
 }

})(jQuery);