// TODO add age on Start click
// add counters
// game over
// Clean up user stories/README
// make it pretty
    //add animations


// stub √
const pachy = {
    age: 0,
    name:"",                        
    hunger: 0,  // -1/30s  10=dead, 0=happy
    energy: 0,  // -1/30s  10=dead, 0=happy
    boredom: 0,  // +1/30s 0=happy, 10=run away (Ice Box, reverse it)
};


$(`#munch`).on("click", feedPachy);
function feedPachy(){
    pachy.hunger = pachy.hunger -1.5;
    pachy.energy = pachy.energy -0.25;
    console.log("noms");
};


$(`#nap`).on("click", sleepPachy);
function sleepPachy(){
    pachy.energy = pachy.energy -1;
    pachy.boredom = pachy.boredom +0.25;
    console.log("zzzz");
};


$(`#rumpus`).on("click", playPachy);
function playPachy(){
    pachy.boredom = pachy.boredom -1.5;
    pachy.energy = pachy.energy +0.25;
    console.log("weeee!");
};


function ageIncrease(){   
    pachy.age = setInterval(increaseAge, 3000);
    console.log("age up");
};
function increaseAge(){
    pachy.age++;
};


function hungerIncrease(){  
    pachy.hunger = setInterval(increaseHunger, 20000);
    console.log("hunger up");
};
function increaseHunger(){
    pachy.hunger++;
};


function energyIncrease(){  
    pachy.energy = setInterval(increaseEnergy, 25000);
    console.log("energy up");
};
function increaseEnergy(){  
    pachy.energy++;
};


function boredomIncrease(){  
    pachy.boredom = setInterval(increaseBoredom, 15000);
    console.log("boredom up");
};
function increaseBoredom(){
    pachy.boredom++;
};

// Click Start to start a new game  √
    //store name √
        //have user input name √
        //create variabble for name √
        //input value of prompt in name variable √
    // click start, start game with name √, age, HEB √ running 
    // start starts age, hunger, energy, boredom timers√
        //write timer function √  
            //funciton to increase age w/time linked to timer √
                //display age  -!- debug
            //funciton to increase  w/time linked to timer √
            //funciton to increase age w/time linked to timer √
            //funciton to increase age w/time linked to timer √
        // connect timers to start button √
    // adjusting HEB in gameplay
        // +hunger √
            //onCLick √
        // +energy √
            //onClick √
        // +boredom √
            //onClick √
    //HEB counters
        //update w/timer
    // game over
    
    
$(`#start`).on("click", function(){
    $(".name").text($(`#input-name`).val());
});
$(`#start`).on("click", ageIncrease);
$(`#start`).on("click", hungerIncrease);
$(`#start`).on("click", energyIncrease);
$(`#start`).on("click", boredomIncrease);
