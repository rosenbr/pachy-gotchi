console.log("testing");
// stub
// create form to input pet name
// create new pet
// attach H/E/B to pet
// create timer for HEB
// create buttons for M/N/R
// link MNR to HEB
// create event for death
// create event for game end


const pet = {
    name: "",
    age: 0,
    hunger: 10,  // -1/30s
    energy: 10,  // -1/30s
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

