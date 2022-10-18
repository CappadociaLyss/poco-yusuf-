var myColor = ["red", "green", "blue", "white", "black", "grey"];


for (var i = 0; i < myColor.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + myColor[i]);
}




var myTeam = ["Bjk", "Barca", "Ajax", "Arsenal", "Realmadrid"];
for (var b = 0; b< myTeam.length; b++){
    console.log (" My "+ (b + 1) + ". favourite team is " + myTeam[b])
}



































for (var i = 0; i < myColor.length; i++) { 
        var choiceNum = i + 1;
   var choiceNumSuffix;
        if (choiceNum == 1) {
        choiceNumSuffix = 'st';
     } else if (choiceNum == 2) {
                 choiceNumSuffix = 'nd';
  } else if (choiceNum == 3) {
         choiceNumSuffix = 'rd';
     } else {
         choiceNumSuffix = 'th';
     }
     console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + myColor[i]);
}

