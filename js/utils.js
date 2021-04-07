console.log("testing");
// stub

const pachy = {

    age: 0,    // +1/30s max 10 if(time % 30 === 0) age++
    name:"",                        
    hunger: 10,  // -1/30s  0=dead, 10=happy
    energy: 10,  // -1/30s  0=dead, 10=happy
    boredom: 10,  // +1/30s 10=happy, 0=run away (Ice Box, reverse it)
    time: 0,
    timer: null,
    /* startTimer(){
        this.timer = setInterval(this.increaseTime, 1000);
    } */
};

    /* pet () {        
        $name: $(`#input-name`).val();
        pachy.name = $name;
        //buttons
        //click listener
        //adjust values
    },
     */// $game  = {
        // button, onClick -> feeds pet, adjusts Hunger
        // +1.5 hunger, +.025 energy
        // munch(){
        // },
        
        // nap(){
            // button, onClick -> pet sleeps, adjusts Energy
            // +1.5 energy, +.025 boredom
        // },
        
        // rumpus(){
            // button, onClick -> pet plays, adjusts Boredom
            // -1.5 bordeom, -0.25 energy
        // },
    // },

    /* time: 0,
    timer: null,
    startTimers(){
        this.timer = setInterval(this.increaseTime, 1000);
    }, */
    
    


/* increaseTime(); {
    pachy.time++;
    $(`.age`).text(`Age: ${pachy.time}`);
    if(time % 30 === 0){
        pachy.age++;
    }
    console.log("time is running");
}; */
// pachy.age //age = +1 every 30sec

// start timer
function startTimer(){
    pachy.timer = setInterval(increaseTime, 1000);
        $(".timer").text($('pachy.timer').val());
        console.log("timer working");
};

function increaseTime(){
    pachy.time++;
};
function ageIncrease(){
    if(pachy.time % 5 === 0){
        pachy.age++;
    }
};
 
/*
function ageIncrease(){
    if(pachy.time % 30 === 0){
        pachy.age++;
    }
}; */



// Click Start to start a new game  
    //store name √
        //have user input name √
        //create variabble for name √
        //input value of prompt in name variable √
    
    // start starts age, hunger, energy, boredom timers
        //write timer function √  
            //funciton to increase age w/time linked to timer
            //funciton to increase  w/time linked to timer
            //funciton to increase age w/time linked to timer
            //funciton to increase age w/time linked to timer
        // connect timers to start button √
    
    // click start, start game with name, age, HEB running 
    
$(`#start`).on("click", function(){
    $(".name").text($('#input-name').val());
});

$(`#start`).on("click", startTimer);
