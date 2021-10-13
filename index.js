var numberofloops=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofloops;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonclicked= this.innerHTML;
        makesound(buttonclicked); 
        buttonanimation(buttonclicked);       
    }
    )  
}
document.addEventListener("keydown", function(event)
{var keyboard=event.key;
    makesound(keyboard);
buttonanimation(keyboard);
}

)
function makesound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio(" sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case "a":
            
         var tom2 = new Audio(" sounds/tom-2.mp3");
         tom2.play();
         break;
         case "s":
            
         var tom3 = new Audio(" sounds/tom-3.mp3");
         tom3.play();
         break;
         case "d":
            
            var tom4 = new Audio(" sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
             var snare = new Audio(" sounds/snare.mp3");
                snare.play();
                break;
         case "k":
             var crash = new Audio(" sounds/crash.mp3");
                crash.play();
                break;
        case "l":
                    var kick_bass = new Audio(" sounds/crash.mp3");
                       kick_bass.play();
                       break;
        default:
            break;
    }
    
}

function buttonanimation(key1)
{
var activebutton=document.querySelector("."+key1)
 activebutton.classList.add("pressed");
 setTimeout(function(){activebutton.classList.remove("pressed")},100)
}