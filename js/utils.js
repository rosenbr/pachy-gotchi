console.log("testing");
// stub

// Click Start to start a new game
    //create Start button √
    //add click listener to button
    //grab input value and store in variable
    //make new element?
    //change text content of new element
    //put element in DOM - grab parent and append

// create form to input pet name
    //create name variable
    //create initial value of ""
    //create function to store name entered
    //get html/css to display name
        //might need to be broken down more


// create new pet

// attach H/E/B to pet

// create timer for HEB

// create buttons for M/N/R

// link MNR to HEB

// create event for death

// create event for game end


const $pet = {
    age: 0,
    hunger: 0,  // -1/30s
    energy: 0,  // -1/30s
    boredom: 0,  // +1/30s
    
    
    
};

const game = {
    munch(){
        // button, onClick -> feeds pet, adjusts Hunger
        // +1.5 hunger, +.025 energy
    },  
    
    nap(){
        // button, onClick -> pet sleeps, adjusts Energy
        // +1.5 energy, +.025 boredom
    },
    
    rumpus(){
        // button, onClick -> pet plays, adjusts Boredom
        // -1.5 bordeom, -0.25 energy
    },
};

// Click Start to start a new game  
    // click start √ 
    //have user input name √, 
    //store name
        //create variabble for name
        //input value of prompt in name variable
        
        
        //update div 
    //add HEB values to pet
    //start timers

    // let $name = $(`<span class"name">$name</span>`).appendTo(`<div>`);
    $(`#start`).click(function() {
        const value = document.querySelector("input").value;
        
        // let $name = $petName.text(val($petName));
        console.log("click test");
    });

/* 
$("button").click(function(){
  $("input:text").val("Glenn Quagmire");
});
 */
// .val() to grab value
// .text() to write into html
// $(".pet-name").text($(.val()))   ???
// $('.name').text($($name.val(input)));