// TODO add age on Start click
// add counters √
// action buttons working √
// game over
// Clean up user stories/README √
// make it pretty
    //add animations -use css animations? (keyframes)


// stub √
const pachy = {
    age: 0,
    name:"",                        
    hunger: 10,  
    energy: 10,  
    boredom: 10, 
    time: 300,
    timer: null,
    timeDecrease(){
        pachy.timer = setInterval(pachy.decreaseTime, 1000);
        // console.log("timer running");
    },
    decreaseTime(){
        pachy.time--;
        // console.log("is working");
        if(pachy.boredom <= 0) {
            clearInterval(pachy.timer);
            console.log("time stopped");
        } 
    },
    ageIncrease(){   
        pachy.age = setInterval(pachy.increaseAge, 2000);
        // console.log("age up");
    },
    increaseAge(){
        pachy.age++;
        $('.age').text(`Age: ${pachy.age}`);
    },
    hungerDecrease(){  
        pachy.timeDecrease = setInterval(pachy.decreaseHunger, 2000);
        // console.log("hunger down");
    },
    decreaseHunger(){
        pachy.hunger--;
        $('.hunger').text(`Hunger: ${pachy.hunger}/10`);
    },
    feedPachy(){
        pachy.hunger = pachy.hunger +1.5;
        pachy.energy = pachy.energy +0.25;
        console.log("noms");
    },
    hungryPachy(){
        pachy.time--;
        // console.log(pachy.time)
        if(pachy.hunger <= 0 ) {
            clearInterval(pachy.timeDecrease);
            console.log("hunger stopped");  //not working
        } 
    },
    energyDecrease(){  
        pachy.timeDecrease = setInterval(pachy.decreaseEnergy, 2000);
        // console.log("energy down");
    },
    decreaseEnergy(){  
        pachy.energy--;
        $('.energy').text(`Energy: ${pachy.energy}/10`);
    },
    sleepPachy(){
        pachy.energy++;
        pachy.boredom = pachy.boredom -0.25;
        console.log("zzzz");
    },
    boredomDecrease(){  
        pachy.timeDecrease = setInterval(pachy.decreaseBoredom, 1000);
        // console.log("boredom down");
    },
    decreaseBoredom(){
        pachy.boredom--;
        gameOverMan();
        $('.boredom').text(`Boredom: ${pachy.boredom}/10`);
        // console.log("packy bored");
        if(pachy.boredom <= 0) {
            clearInterval(pachy.timer);
            // console.log("boredom stopped");
        }
    },
    playPachy(){
        pachy.boredom++;
        pachy.energy = pachy.energy -0.25;
        console.log("weeee!");
    },
    
}; 
/* function gameOverMan(){
    if(pachy.boredom >= 0){
        $("#game-over").hide();
        console.log("hidden");
    } else {
        $("#game-over").show(1000, swing);
        console.log("visible");
    }
}; */

function gameOverMan(){
    if(pachy.boredom <= 0){
        document.getElementById("game-over").style.display = "block";
        console.log("visible");
    } else {
        document.getElementById("game-over").style.display = "none"
        console.log("hidden");
    }
};


$('#start').on("click", function(){
    $(".name").text($(`#input-name`).val());
});
$('#start').on("click", pachy.timeDecrease);   
$('#start').on("click", pachy.ageIncrease);   
$('#start').on("click", pachy.hungerDecrease);
$('#start').on("click", pachy.energyDecrease);
$('#start').on("click", pachy.boredomDecrease);
$('#munch').on("click", pachy.feedPachy);
$('#nap').on("click", pachy.sleepPachy);
$('#rumpus').on("click", pachy.playPachy);

// Click Start to start a new game  √
    //store name √
        //have user input name √
        //create variabble for name √
        //input value of prompt in name variable √
    // click start, start game with name √, age √, HEB √  
    // start starts age, hunger, energy, boredom timers√
        //write timer function √  
            //funciton to increase age w/time linked to timer √
                //display age √
            //funciton to increase  w/time linked to timer √
            //funciton to increase age w/time linked to timer √
            //funciton to increase age w/time linked to timer √
        // connect timers to start button √
    // adjusting HEB in gameplay √
        // +hunger √
            //onCLick √
        // +energy √
            //onClick √
        // +boredom √
            //onClick √
    //HEB counters   √
        //update w/timer √
        //udate w/feed, sleep, play √
            //boredom/play √
    //Change pet pic as it ages   ===before EOD===
        //function/loop to swap pics
    //Animate pet pics   ===after EOD===
        //change with age
        //animate woah.css and animate.css (see written wireframe)
    // game over  ===after lunch===
        //create pop-up and/or new div when stats reach certain value
        //stop timers
        //create listener for min values
            //un-hide game-over div  
                //function to un-hide div
                //loop to recognize value limit
                //document.getElementsByClass("game-over").style.display = "none" 