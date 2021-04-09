-Wirefame
    -draw out how the game will look
    -include pictures
    -or use wireframe tool


-User Stories
    
    -User Begins game by entering their own custom pachycephalosaurus' name in the input box
    -When the User clicks "Start", the game begins.
    -Timers also begin, one for age, hunger, energy, and boredom
    -The User must try to keep their pachycephalosaurus alive and happy
    -To do so, the User much click "Munch" to feed their pachycephalosaurus, "Nap" to get some sleep, and "Rumpus" to play with their pachycephalosaurus
    -If the User keeps their pachycephalosaurus alive until it reaches 10 yrs old, the game ends
    -Or if the User fails to keep their pachycephalosaurs fed, well rested, or entertained, it will die and the game is over.

Notes:
    -project explanation
    -technologies used
    -approach taken
    -installation instructions
    -unsolved problems
    -other components?

Example README files:
    https://git.generalassemb.ly/r-sei-12/Project_Planning_Examples

General Tips:
    -Break it down into smaller portions
    -Use dev tools (conosle.log/element inspector)
    -Commit early and often (20 minimum)
    -Consult documentation resources (MDN/W3School)
    -Write WET code, then DRY it off later

Techincal Requirements:
    -Have its own Repo
    -Git 20+ Commits
    -Innclue Wireframe and User Stories in README
    -Render Game in web browser
    -Include seperate HTML/CSS/JS files
    -Use JavaScript or Jquery for Dom manipulation
    -Use semantic markup for HTML and CSS
    -Deploy to a public url using GitHub

Specs AKA MVP:
    -Create Repo  √
    -Commit after:
        -Instatiate tomagotchi √
        -Display a character on screen √
        -Display Hunger/Energy/Boredom √
        -Display Age √
        -Add Buttons to feed/sleep/play √
        -Ability to Name pet √
        -Style the page
        -Increase Pet's age every x minutes √
        -Increase H/E/B √
        -Pet should die when H/E/B hit limit
        -Morph pet with age
        -Animate pet while on screen

Extras:
    -Create Class (JS CLass)
    -Give birth to new pet
    -Special powers
    -Add exercise() method, that effects certain properties
    -Anything else??

Inspiration: banging head into wall to get code to work, pachy bangs head into its problems!

//===Log of Progress:===\\

Part 1: Stubbing it UP!
    -Stubbed up html
    -Stubbed up main.css
    -Stubbed up utils.js

Part 2: More Stubbing
    -Got main Html elements on page
    -Set up base CSS
    -Styled them to for visual representaion and orientation
    -Re-positioned them
    -Added eat/sleep/play buttons
    -Created repo


Part 3: All. The. Stubbing.
    -Added classes and id's to html elements
    -Added buttons to feed, sleep, and play


Part 4: Stat Counters and Buttons
    -Bashed my head into the "Create a Start Button" wall
    -My thick skull prevailed!
    -Wrote out functions to increase age, hunger, energy, and boredom with time
    -Wrote functions to decrease hunger, energy, and boredom when clicked
    -Got stats counters to update with time and when an action is taken to reduce them

Part 5: Game Over
    -Started working on creating the "game over" screen
    -Set up HTML for game over
    -Wrote function to place an HTML element when specific values for HEB are met

Part 6: Animations and Pet Growth
    -Added new img tags to HTML for baby, teen and adult
    -Wrote functions to cylce through them at specified intervals
    -Prepped CSS for animations
    -Animated pet

Part 7: Make it Pretty
    -Worked on styling the page in CSS
