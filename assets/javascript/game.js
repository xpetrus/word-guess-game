var wordGame ={
    wordBank: [
        "Salt-Bae",
        "Nyan-Cat",
        "Ugandan-Knuckles",
        "Bitconnect",
        "Troll-Face",
        "Grumpy-Cat",
        "Doge",
        "Pepe-the-Frog",
        "Rickroll",
        "More-cowbell",
        "Double-Rainbow",
        "Numa-Numa",
        "Friday",
        "Hamster-dance",
        "Dramatic-Chipmunk",
        "More-Cowbell"



    ],

    guessesLeft:10,

    pickWord:function() {
        var answer = this.wordBank[Math.floor(Math.random()*this.wordBank.length)]; //assigns answer a random index # from wordBank array
        
        console.log("Word picked: "+answer);
        return answer;
        
       
    },

    newRound:function(){
        var round =wordGame.pickWord();
        var blankSpaces=[]; 
        var allBlanks=""; 
        
    
       for(var i = 0; i < round.length; i++){
        
        if(round.charAt(i)=="-"){
            blankSpaces[i]="-";
        }
        else{
            blankSpaces.push("_ ");
        }
    
        allBlanks=allBlanks + blankSpaces[i]; //to print out the array without commas. 
        
        
       }
       document.querySelector("#cword").innerHTML="<p>"+allBlanks+"</p>";
       return round; // experimenting

    },

    guessCheck: function(guess, roundWord){

        for(var i = 0; i < roundWord.length; i++){
            if(guess==roundWord.charAt(i)){

            }
        }
    }




};



document.onkeyup=function(event){
    var guess=event.key;

    var html="<p>You entered: "+guess+"</p>";
    document.querySelector("#gameboard").innerHTML = html; 
    
    roundWord = wordGame.newRound();

   // roundWord=  wordGame.newRound();  //testing code
  //  wordGame.guessCheck(guess, roundWord);


    

        


    
}


