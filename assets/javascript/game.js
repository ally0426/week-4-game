$(document).ready(function() {
  
  // objects containing stats(name/health/attack/active/activeOp/defeated) for each hero
  var lukeSkywalker = {
    name: "Luke Skywalker", 
    health: 120, 
    attack: 12,
    active: false, 
    activeOp: false, 
    defeated: false
  };
 
  var darthVader = {
    name: "Darth Vader", 
    health: 105, 
    attack: 15,
    active: false, 
    activeOp: false, 
    defeated: false
    
  };
  
  var hanSolo = {
    name: "Han Solo", 
    health: 150, 
    attack: 8, 
    active: false, 
    activeOp: false, 
    defeated: false
  };
  
  var bobaFett = {
    name: "Boba Fett", 
    health: 140, 
    attack: 10,
    active: false, 
    activeOp: false, 
    defeated: false
  };
  
  // set html cards to jQuery variables
  var lukeCard = $("#lukeCard");
  var vaderCard = $("#vaderCard");
  var hanCard = $("#hanCard");
  var bobaCard = $("#bobaCard");
  
  // set variables to hold active fighter and opponent stats
  var activeFighter;
  var activeOpponent;
  
  //function to start the game
  function startGame() {
    // 1. function to reset back to inital attack and health values to html and appropriate starting text to choose your fighter
    $("#chooseHero").text("Please choose a hero to fight on your side:");
    
    $("#lukeAttack").text(lukeSkywalker.attack);
    $("#luckHealth").html(lukeSkywalker.health);
    $("#vaderAttack").html(darthVader.attack);
    $("#vaderHealth").html(darthVader.health);
    $("#hanAttack").html(hanSolo.attack);
    $("#hanHealth").html(hanSolo.health);
    $("#bobaAttack").html(bobaFett.attack);
    $("#bobaHealth").html(bobaFett.health);
    
    
    // 2. options to choose your fighter
    // if the luck card is clicked
    $("#lukeCard").on("click", function() {
      // make sure whether any other hero was already chosen as your fighter or not
      if(lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
        // if nothing was chosed as your fighter, luke is your ACTIVE fighter and change the status as true
      lukeSkywalker.active === true;
        // then, run the fight function
        selectOp();       
      }      
    });
     // if the vader card is clicked
    $("#vaderCard").on("click", function() {
      // make sure whether any other hero was already chosen as your fighter or not
      if(lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
        // if nothing was chosed as your fighter, luke is your ACTIVE fighter and change the status as true
      darthVader.active === true;
        // then, run the fight function
        selectOp();       
      }      
    });
     // if the han card is clicked
    $("#hanCard").on("click", function() {
      // make sure whether any other hero was already chosen as your fighter or not
      if(lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
        // if nothing was chosed as your fighter, luke is your ACTIVE fighter and change the status as true
      hanSolo.active === true;
        // then, run the fight function
        selectOp();       
      }      
    });
     // if the boba card is clicked
    $("#bobaCard").on("click", function() {
      // make sure whether any other hero was already chosen as your fighter or not
      if(lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
        // if nothing was chosed as your fighter, luke is your ACTIVE fighter and change the status as true
      bobaFett.active === true;
        // then, run the fight function
        selectOp();       
      }      
    });
    
    // 3. press Attack button to know fighter and opponent matchups
    $("#attackButton").on("click", function() {
      // if luck is active as fighter and vader is active as opponent, then assign them to fighter and op variables
       if (lukeSkywalker.active === true && darthVader.activeOp === true) {
      activeFighter = lukeSkywalker;
      activeOpponent = darthVader;
    } else if (lukeSkywalker.active === true && hanSolo.activeOp === true) {
      activeFighter = lukeSkywalker;
      activeOpponent = hanSolo;
    } else if (lukeSkywalker.active === true && bobaFett.activeOp === true) {
      activeFighter = lukeSkywalker;
      activeOpponent = bobaFett;
    }
    if (darthVader.active === true && lukeSkywalker.activeOp === true) {
      activeFighter = darthVader;
      activeOpponent = lukeSkywalker;
    } else if (darthVader.active === true && hanSolo.activeOp === true) {
      activeFighter = darthVader;
      activeOpponent = hanSolo;
    } else if (darthVader.active === true && bobaFett.activeOp === true) {
      activeFighter = darthVader;
      activeOpponent = bobaFett;
    }
    if (hanSolo.active === true && lukeSkywalker.activeOp === true) {
      activeFighter = hanSolo;
      activeOpponent = lukeSkywalker;
    } else if (hanSolo.active === true && darthVader.activeOp === true) {
      activeFighter = hanSolo;
      activeOpponent = darthVader;
    } else if (hanSolo.active === true && bobaFett.activeOp === true) {
      activeFighter = hanSolo;
      activeOpponent = bobaFett;
    }
    if (bobaFett.active === true && lukeSkywalker.activeOp === true) {https://codepen.io/dashboard/
      activeFighter = bobaFett;
      activeOpponent = lukeSkywalker;
    } else if (bobaFett.active === true && darthVader.activeOp === true) {
      activeFighter = bobaFett;
      activeOpponent = darthVader;
    } else if (bobaFett.active === true && hanSolo.activeOp === true) {
      activeFighter = bobaFett;
      activeOpponent = hanSolo;
    }        
   
    // 4. calculate attack and health status for fighter and opponent
    activeOpponent.health -= activeFighter.attack;
    activeFighter.health -= activeOpponent.attack;
    
    // 5. show attack results on the attack log
    $("#attackLog").html("You attacked " + activeOpponent.name + " for " + activeFighter.attack + " damage! Meanwhile, " + activeOpponent.name + " attacked you for " + activeOpponent.attack + " damage.");
    // increase fighter attack by 8 by each attack
    activeFighter.attack += 8;
    // show updated attack and health of fighter and opponent on html   ??????????
    $("#activeFighterPlace .attack").html(activeFighter.attack);
    $("#activeFighterPlace .health").html(activeFighter.health);
    $("#activeOpPlace .attack").html(activeOpponent.attack);
    $("#activeOpPlace .health").html(activeOpponent.health);
    
      // show result of the game                          
      roundResult();
      
      finalResult();
                                
    }); //end of button click function
    
  }//end of start game function
  
  
  // 6. execute start game function
  startGame();
  
  
  // 7. restart button click function
  $("#restart").on("click", function() {
    // place each hero card on its original place
    $("#lukePlace").append(lukeCard);
    $("#vaderPlace").append(vaderCard);
    $("#hanPlace").append(hanCard);
    $("#bobaPlace").append(bobaCard);
    // delete border effect on all the cards
    $("#lukeCard, #vaderCard, #hanCard, #bobaCard").css({"border": "none"});
    // empty attack log, fighterDisplay and new opponent areas
    $("#attackLog").empty();
    $("#fighterResult").empty();
    $("#newOpRequest").empty();
    
    // start game again
    startGame();
  });
  
  
  // 8. select opponent and then set up fighting area based on fighter and opponent chosen
  function selectOp() {
    // if luck is chosen as fighter
    if(luckSkywalker.active) {
      // move luck card to active fighter place
      $("#lukeCard").detach().appendTo("#activeFighterPlace").css({"border": "5px solid green"});
      // change the content from choose fighter to choose opponent
      $("#chooseHero").text("Now select an opponent to face:");
      // luck card cannot be clicked any more as already chosen
      $("#lukeCard").off("click");
      // give border effects on the other cards to be chosen as opponent
      $("#vaderCard, #hanCard, #bobaCard").css({"border": "5px solid red"});
      
      // if vader is chosen as opponent
      $("#vaderCard").on("click", function() {
        // change vader as opponent by changing status as true
        darthVader.activeOp = true;
        // move vader card to active opponent place
        $("#vaderCard").detach().appendTo("#activeOpPlace");
        // move han and boba cards to 2 remaining opponents places
        $("#hanCard").detach().appendTo("#remainingOp1");
        $("#bobaCard").detach().appendTo("#remainingOp2");
        // empty the choose hero area as both fighter and opponent are chosen
        $("#chooseHero").empty();
      });
      // if han is chosen as opponent
      $("#hanCard").on("click", function() {
        // change han as opponent by changing status as true
        hanSolo.activeOp = true;
        // move han card to active opponent place
        $("#hanCard").detach().appendTo("#activeOpPlace");
        // move vader and boba cards to 2 remaining opponents places
        $("#vaderCard").detach().appendTo("#remainingOp1");
        $("#bobaCard").detach().appendTo("#remainingOp2");
        // empty the choose hero area as both fighter and opponent are chosen
        $("#chooseHero").empty();
      });
      // if boba is chosen as opponent
      $("#bobaCard").on("click", function() {
        // change boba as opponent by changing status as true
        bobaFett.activeOp = true;
        // move boba card to active opponent place
        $("#bobaCard").detach().appendTo("#activeOpPlace");
        // move vader and boba cards to 2 remaining opponents places
        $("#vaderCard").detach().appendTo("#remainingOp1");
        $("#bobaCard").detach().appendTo("#remainingOp2");
        // empty the choose hero area as both fighter and opponent are chosen
        $("#chooseHero").empty();
      });   
    } // end of luke hero path
    
    else if (darthVader.active) {
      $("#vaderCard").detach().appendTo("#activeFighterPlace").css({"border": "5px solid green"});
      $("#chooseHero").text("Now select an opponent to face:");
      $("#vaderCard").off("click");
      $("#lukeCard, #hanCard, #bobaCard").css({"border": "5px solid red"});
      
      // click enemy now and move to correct positions
      $("#lukeCard").on("click", function() {
        lukeSkywalker.activeOp = true;
        $("#lukeCard").detach().appendTo("#activeOpPlace");
        $("#hanCard").detach().appendTo("#remainingOp1");
        $("#bobaCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #hanCard, #bobaCard").off("click");
        $("#chooseHero").empty();
      });
      $("#hanCard").click(function() {
        hanSolo.activeOp = true;
        $("#hanCard").detach().appendTo("#activeOpPlace");
        $("#lukeCard").detach().appendTo("#remainingOp1");
        $("#bobaCard").detach().appendTo("#remainingOp2");
        $("#hanCard, #lukeCard, #bobaCard").off("click");
        $("#chooseHero").empty();
      });
      $("#bobaCard").click(function() {
        bobaFett.activeOp = true;
        $("#bobaCard").detach().appendTo("#activeOpPlace");
        $("#lukeCard").detach().appendTo("#remainingOp1");
        $("#hanCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #hanCard, #bobaCard").off("click");
        $("#chooseHero").empty();
      });
    }// end of vader hero path
    
    else if (hanSolo.active === true) {
      $("#hanCard").detach().appendTo("#activeFighterPlace").css({"border": "5px solid green"});
      $("#chooseHero").text("Now select an opponent to face:");
      $("#hanCard").off("click");
      $("#lukeCard, #vaderCard, #bobaCard").css({"border": "5px solid red"});
      
      // click enemy now and move to correct positions
      $("#lukeCard").click(function() {
        lukeSkywalker.activeOp = true;
        $("#lukeCard").detach().appendTo("#activeOpPlace");
        $("#vaderCard").detach().appendTo("#remainingOp1");
        $("#bobaCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #vaderCard, #bobaCard").off("click");
        $("#chooseHero").empty();
      });
      $("#vaderCard").click(function() {
        darthVader.activeOp = true;
        $("#vaderCard").detach().appendTo("#activeOpPlace");
        $("#lukeCard").detach().appendTo("#remainingOp1");
        $("#bobaCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #vaderCard, #bobaCard").off("click");
        $("#choosekHero").empty();
      });
      $("#bobaCard").click(function() {
        bobaFett.activeOp = true;
        $("#bobaCard").detach().appendTo("#activeOpPlace");
        $("#lukeCard").detach().appendTo("#remainingOp1");
        $("#vaderCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #vaderCard, #bobaCard").off("click");
        $("#choosekHero").empty();
      });
    } // end of han hero path
    
    else if (bobaFett.active === true) {
      $("#bobaCard").detach().appendTo("#activeFighterPlace").css({"border": "5px solid green"});
      $("#chooseHero").text("Now select an opponent to face:");
      $("#bobaCard").off("click");
      $("#lukeCard, #vaderCard, #hanCard").css({"border": "5px solid red"});
      
      // click enemy now and move to correct positions
      $("#lukeCard").click(function() {
        lukeSkywalker.activeOp = true;
        $("#lukeCard").detach().appendTo("#activeOpPlace");
        $("#vaderCard").detach().appendTo("#remainingOp1");
        $("#hanCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #vaderCard, #hanCard").off("click");
        $("#chooseHero").empty();
      });
      $("#vaderCard").click(function() {
        darthVader.activeOp = true;
        $("#vaderCard").detach().appendTo("#activeOpPlace");
        $("#lukeCard").detach().appendTo("#remainingOp1");
        $("#hanCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #vaderCard, #hanCard").off("click");
        $("#chooseHero").empty();
      });
      $("#hanCard").click(function() {
        hanSolo.activeOp = true;
        $("#hanCard").detach().appendTo("#activeOpPlace");
        $("#lukeCard").detach().appendTo("#remainingOp1");
        $("#vaderCard").detach().appendTo("#remainingOp2");
        $("#lukeCard, #vaderCard, #hanCard").off("click");
        $("#chooseHero").empty();
      });
    } // end of boba hero path
        
  } // end of selectOp function
  
  
  // 9. game result function
  function roundResult() {
    // if fighter is beaten
    if(activeFighter.health <= 0) {
      // cannot click attack button anymore as fighter is already beaten
      $("#attackButton").off("click");
      // remove beaten fighter from active fighter place
      $("#activeFighterPlace").remove();
      // inform of the fighter result
      $("#fighterResult").text("You lost the fight!");
      // if fighter beats opponent
    } else if(activeOpponent.health <= 0) {
         // if luke is opponent and defeated
       if(lukeSkywalker.activeOp) {
         // change luke active status as false as defeated
         lukeSkywalker.activeOp = false;
         // change luke defeated status as true as defeated
         lukeSkywalker.defeated = true;
       } else if (darthVader.activeOp) {
          darthVader.activeOp = false;
          darthVader.defeated = true;
        } else if (hanSolo.activeOp) {
          hanSolo.activeOp = false;
          hanSolo.defeated = true;
        } else if (bobaFett.activeOp) {
          bobaFett.activeOp = false;
          bobaFett.defeated = true;
        }
      
      // there is no active opponent, so the value became undefined
      activeOpponent = undefined;
      // remove active Op card from active Op place      ????????????????
      $("#activeOpPlace .card").remove();
      
      // ask to choose another opponent to defeat
      $("#newOpRequest").show().text("Now click a new opponent to defeat!");
      // if luke is chosed as the next opponent
      $("#lukeCard").on("click", function() {
        // if luck is not fighter ( & chosed as the next opponent)
        if(!luckSkywalker.active) {
          // luck becomes active opponent by chaning active op status as true
          lukeSkywalker.activeOp = true;
          // detach luck card and move to active op place 
          $("#luckCard").detach().appendTo("#activeOpPlace");
          // hide new op request message
          $("#newOpRequest").hide();
          // cannot other opponents cards as opponent was chosen
          $("#vaderCard, #hanCard, #bobaCard").off("click");        
        }  
      });
      
      $("#vaderCard").on("click", function() {
          if (!darthVader.active) {
            darthVader.activeOp = true;
            $("#vaderCard").detach().appendTo("#activeOpPlace");
            $("#newOpRequest").hide();
            $("#lukeCard, #hanCard, #bobaCard").off("click");
          } 
        });
        $("#hanCard").on("click", function() {
          if (!hanSolo.active) {
            hanSolo.activeOp = true;
            $("#hanCard").detach().appendTo("#activeOpPlace");
            $("#newOpRequest").hide();
            $("#lukeCard, #vaderCard, #bobaCard").off("click");
          }
        });
        $("#bobaCard").click(function() {
          if (!bobaFett.active) {
            bobaFett.activeOp = true;
            $("#bobaCard").detach().appendTo("#activeOpPlace");
            $("#newOpRequest").hide();
            $("#lukeCard, #vaderCard, #hanCard").off("click");
          }
        });   
    } 
  }  // end defeatFighter();
  
  // 10. show final result
  function finalResult() {
    // if luke is active as fighter at the end
    if(lukeSkywalker.active) {
      // if others are all defeated (and luke is active as fighter)
      if(darthVader.defeated === true && hanSolo.defeated === true && bobaFett.defeated === true) {
        // attack button cannot be clicked any more
        $("#attackButton").off("click");
        //  new opponent request message should be hidden
        $("newOpRequest").hide();
        //  show the final result
        $("#fighterResult").html("<h1>YOU WON THE FIGHT!/h1>");
      }
    } else if (darthVader.active === true) {
        if (lukeSkywalker.defeated === true && hanSolo.defeated === true && bobaFett.defeated === true) {
          $("#attackButton").off("click");
          $("#newOpRequest").hide();
          $("#fighterResult").html("<h1>YOU WON THE FIGHT!</h1>");
          console.log("You win");
        }
      } else if (hanSolo.active === true) {
        if (lukeSkywalker.defeated === true && darthVader.defeated === true && bobaFett.defeated === true) {
          $("#attackButton").off("click");
          $("#newOpRequest").hide();
          $("#fighterResult").html("<h1>YOU WON THE FIGHT!</h1>");
          console.log("You win");
        }
      } else if (bobaFett.active === true) {
        if (lukeSkywalker.defeated === true && darthVader.defeated === true && hanSolo.defeated === true) {
          $("#attackButton").off("click");
          $("#newOpRequest").hide();
          $("#fighterResult").html("<h1>YOU WON THE FIGHT!</h1>");
          console.log("You win");
        }
      }

    
  }
  
  // PSUEDOCODING:
    // whatever fighter/opponent gets assigned to slot uses it's original stats (name/health/attack/active/activeOp/defeated)
    // when attack button is pressed 1.) hp is subtracted from attack 2.) hero attack increased
    // when fighter hp = 0 game over
    // when opponent hp = 0 remove from game
    // able to click new opponent
    // repeat clicks to fight
    // when all opponents are removed, you win
    // reset game button to start over
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});