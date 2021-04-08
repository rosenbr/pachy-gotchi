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
    hunger: 0,  // -1/30s  10=dead, 0=happy
    energy: 0,  // -1/30s  10=dead, 0=happy
    boredom: 0,  // +1/30s 0=happy, 10=run away (Ice Box, reverse it)
};


//   ---age---
function ageIncrease(){   
    pachy.age = setInterval(increaseAge, 10000);
    console.log("age up");
};
function increaseAge(){
    $(`.age`).text(`Age: ${pachy.age}`);
    pachy.age++;
};



//   === hunger/feeding ===
function hungerIncrease(){  
    pachy.hunger = setInterval(increaseHunger, 20000);
    console.log("hunger up");
};
function increaseHunger(){
    $(`.hunger`).text(`Hunger: ${pachy.hunger}/10`);
    pachy.hunger++;
};
function feedPachy(){
    pachy.hunger = pachy.hunger -1.5;
    pachy.energy = pachy.energy -0.25;
    console.log("noms");
};


//   === energy/nap ===
function energyIncrease(){  
    pachy.energy = setInterval(increaseEnergy, 25000);
    console.log("energy up");
};
function increaseEnergy(){  
    $(`.energy`).text(`Energy: ${pachy.energy}/10`);
    pachy.energy++;
};
function sleepPachy(){
    pachy.energy--;
    pachy.boredom = pachy.boredom +0.25;
    console.log("zzzz");
};



//   === boredom/play ===
function boredomIncrease(){  
    pachy.boredom = setInterval(increaseBoredom, 100);
    console.log("boredom up");
};
function increaseBoredom(){
    $(`.boredom`).text(`Boredom: ${pachy.boredom}/10`);
    pachy.boredom++;
};
function playPachy(){
    pachy.boredom--;
    pachy.energy = pachy.energy +0.25;
    console.log("weeee!");
};




//   === game over ===   needs debugging
function gameOverMan(){
    if(pachy.hunger === 10 || pachy.energy === 10 || pachy.boredom === 10){
        $("#game-over").show();  
        console.log("hiding");
    }
};




$(`#start`).on("click", function(){
    $(".name").text($(`#input-name`).val());
});
$(`#start`).on("click", ageIncrease);
$(`#start`).on("click", hungerIncrease);
$(`#start`).on("click", energyIncrease);
$(`#start`).on("click", boredomIncrease);
$(`#munch`).on("click", feedPachy);
$(`#nap`).on("click", sleepPachy);
$(`#rumpus`).on("click", playPachy);


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
    //HEB counters √
        //update w/timer √
        //udate w/feed, sleep, play √
            //boredom/play √
    //Change pet pic as it ages
        //function/loop to swap pics
    //Animate pet pics
        //change with age
        //animate woah.css and animate.css (see written wireframe)
    // game over
        //create pop-up and/or new div when stats reach certain value
        //stop timers
        //create listener for max values
            //un-hide game-over div  
                //function to un-hide div
                //loop to recognize value limit
                //document.getElementsByClass("game-over").style.display = "none";
                    //IceBox: seperate div for max boredom
    
    

