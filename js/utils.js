// stub √
const pachy = {
    age: 0,
    name:"",                        
    hunger: 0,  // -1/30s  10=dead, 0=happy
    energy: 0,  // -1/30s  10=dead, 0=happy
    boredom: 0,  // +1/30s 0=happy, 10=run away (Ice Box, reverse it)
};

// <!-- $(`#start`).on("click", ageIncrease); -->
                // or
// $(`#start`).on("click", function(){
    // $(".name").text($(`#input-name`).val());
// });


$(`#munch`).on("click", feedPachy);
function feedPachy(){
    pachy.hunger = pachy.hunger -1.5;
    pachy.energy = pachy.energy -0.25;
    console.log("noms");
};
// sleep
$(`#nap`).on("click", playPachy);
function playPachy(){
    pachy.enerygy = pachy.energy -1;
    pachy.boredom = pachy.boredom -0.25;
    console.log("zzzz");
};

// play
/* $(`#munch`).on("click", feedPachy);
function feedPachy(){
    pachy.hunger = pachy.hunger -1.5;
    pachy.energy = pachy.energy -0.25;
    console.log("noms");
}; */


// munch(){
    //button, onClick -> pet eats, adjusts Hunger
    //+1.5 Hunger, +0.25 Energy

// };


// nap(){
            // button, onClick -> pet sleeps, adjusts Energy
            // +1.5 energy, +.025 boredom
        // },
        
// rumpus(){
            // button, onClick -> pet plays, adjusts Boredom
            // -1.5 bordeom, -0.25 energy
        // },
    // },
function ageIncrease(){   //age
    pachy.age = setInterval(increaseAge, 3000);
    console.log("age up");
};
function increaseAge(){
    pachy.age++;
};
function hungerIncrease(){  //hunger
    pachy.hunger = setInterval(increaseHunger, 20000);
    console.log("hunger up");
};
function increaseHunger(){
    pachy.hunger++;
};
function energyIncrease(){  //energy
    pachy.energy = setInterval(increaseEnergy, 25000);
    console.log("energy up");
};
function increaseEnergy(){  
    pachy.energy++;
};
function boredomIncrease(){  //boredom
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
        // +hunger
            //onCLick
        // +energy
            //onClick
        // +boredom
            //onClick
    //HEB counters
    
    // game over
    
    
$(`#start`).on("click", function(){
    $(".name").text($(`#input-name`).val());
});

$(`#start`).on("click", ageIncrease);
$(`#start`).on("click", hungerIncrease);
$(`#start`).on("click", energyIncrease);
$(`#start`).on("click", boredomIncrease);
