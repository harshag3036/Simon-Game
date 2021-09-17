
var toggle=true;
var level=0;
var index=0;
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
$("body").keypress(function(){
    if(toggle==true){
        nextSequence();
    
        toggle=false;
    }
});


$(".btn").click(function(){
    userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(index,userChosenColour);
    checkAnswer(userClickedPattern.length-1);


    });

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    
    var randomNumber=Math.floor(Math.random()*4);
    gamePattern.push(buttonColours[randomNumber]);
    console.log(gamePattern);
    $("#"+buttonColours[randomNumber]).fadeOut(100).fadeIn(100);
  playSound(buttonColours[randomNumber]);
  


}

function animatePress(name){
    $("."+name).addClass("pressed");
    setTimeout(function(){
       $("."+name).removeClass("pressed");
    },100);

}
function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();

}
function checkAnswer(currentLevel)

{
        // console.log(currIndex);
        // console.log(chosenColour);
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

            console.log("success");
      
            if (userClickedPattern.length === gamePattern.length){
              setTimeout(function () {
                nextSequence();
              }, 1000);
            }
      
          }
        else
        {   console.log("wrong");
            startOver();  
            var audio=new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            $("h1").text("Game Over, Press Any Key to Restart");
            
        }
}

function startOver()
{   gamePattern=[];
    level=0;
  
    toggle=true;
    userClickedPattern=[];
    

}
