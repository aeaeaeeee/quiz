class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("White");
    fill(0);
    textSize(30);
    text("Results:",340, 50);
      Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      var display_Answers = 230;
      fill("White");
      textSize(20);

      for(var plr in allContestants){
        debugger;
        var ans = "2";
        if (ans === allContestants[plr].answer)
          fill("green");
        else
          fill("red");
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers);
      }
    }
  }
}
    
