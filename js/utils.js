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

const pachy = {

    age: 0,    // +1/60s max 10
    name:"",
    hunger: 10,  // -1/30s  0=dead, 10=happy
    energy: 10,  // -1/30s  0=dead, 10=happy
    boredom: 0,  // +1/30s 0=happy, 10=run away

    pet () {        
        $name: $(`#input-name`).val();
        pachy.name = $name;
        
        
        //buttons
        //click listener
        //adjust values
    },
    // $game  = {
        
        
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
    /*
$("#start").click(function() {
    let $name = $(`<span class="name">Name: ${$name}</span>`);
    $(`.white-space`).append($name)
    function showName(){
        let $name = $("#input-name").text($name.val());
    };
    console.log("click test");
});*/
    
   
$(`#start`).on("click", function(){
    // let $name = $(`<span class="name">Name: ${$name}</span>`);
    $(".name").text($('#input-name').val());
    console.log("name");
});
   /*let bla = $('#inout-name').val();
   $('#input-name').val(bla);
   */
   
   /* 
$("button").click(function(){
  $("input:text").val("Glenn Quagmire");
});
 */
// .val() to grab value
// .text() to write into html
// $(".pet-name").text($(.val()))   ???
// $('.name').text($($name.val(input)));