<p align="center">
    <h1>MileStone Project 2 - Interactive Front-End Development</h1><br />
    <strong>Check Out the Game Here: <a href="https://github.com/Hermeticpoet/milestone-project-2">Simon Game</a></strong>
</p>

# Simon Game

## The Brief
> CREATE A MEMORY GAME
>
> Build a simple single-player memory game inspired by Simon. Check out this short [video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4) 
and [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)) entry to understand the rules of the game. Provide details in your README.md 
of the logic you have used to build your game as well as an explanation of how you tested your logic.
>

<p align="center">
    Game As Rendered In Opera<br /><br />
    <img src="Testing/screenshots/Game-Opera.png" alt="Game Rendered in Opera Browser" width="650" height="400">
</p>
                                           

## UX
### Project Goals
The goal of the project is to provide a simple memory game that anybody can play, young or old with little to no development experience.
The game should be fun and easy but also allow for a more difficult version, in order to test the more advanced memory game players. Users 
should be able to understand the layout and controls intuitively so as to best accomodate for ease of game play.

At the top of the screen, within the navbar, is a *Rules* button. Clicking on this will either dropdown an accordian on mobile view or pop-up
a modal on all larger screen sizes. These rules will explain the aim of the game to the user. The game itself will be disabled upon user's arrival 
to the page, to prevent any errors. The center of the game board will contain the controls for powering the game on and, should the user decide to, 
pick to play the game in *strict mode*.

Once the game is powered on, a sound will play to notify the player and the display screen on the control panel will greet them *"HI"*. At this
point the start button at the top of the screen will become active and allow the player to begin the game. The *Top Score* display will then change
to show the player what the last, best high score achieved was for the game, by default, if the game has not been played by the user on the current
browser (localStorage is empty), then the display will show *"00"*. Until such time as the player presses the *Start* button, the game boards colour 
buttons will still be disabled until after the javascript engine has generated the first sequence and the corresponding coloured button lights 
up and plays a sound to notify the player of the first sequence. This too will prevent players from pressing buttons before the game begins and
causing possible errors.

#### Modal & Accordian
According to [uxmag](https://uxmag.com/articles/modals-on-mobile-how-to-use-them-wisely "Modals") and [uxmovement](https://uxmovement.com/mobile/why-you-should-avoid-using-modal-windows-on-mobile/ "Mobile Modals"), modals are best
used on screens of tablet size and bigger. Therefore, I have chosen to include an accordian for the __Rules__ on mobile devices, while keeping the
more standard modal pop-up on the larger device screens.

#### Conceptual Design
During the Scope Plane phase of my design, I used Balsamiq to create my [wireframes](https://github.com/Hermeticpoet/milestone-project-2/tree/master/assets/wireframes).
These have been added to the file tree and pushed to my [GitHub](https://github.com/Hermeticpoet/milestone-project-2) repo for viewing.

#### Colours
The colour choices used for the layout of the page were taken as part of the [Bootswatch Spacelab](https://bootswatch.com/spacelab/) theme. I wanted 
my game to mirror that of the original in essence so I chose to go with the four standard colours of Red, Green, Blue and Yellow. The background colour
was chosen to lighten the look and feel of the application, by adding contrast to the darker buttons while also complimenting the navbar and footer
colours provided as part of the Bootswatch theme.

#### Fonts
The primary font Rubik was selected for its soft, playful aesthetic. Likewise, the secondary font Sniglet maintains this same playful look but with a 
slightly harder, straighter lined edge to make the button text clear to the users. The displays use the more traditional Courier font as it provided
the most clear and plain format within the display box with its seeming led glowing appearance.

### User Stories
As a player, I want: 
1. To find and understand the rules of the game easily. 
2. To intuitively grasps where everything on the page and around the game board.
3. Audio and visual feedback when I play the game so that I know when I have clicked or not clicked something.
4. The capability to increase the difficulty of the game when I choose.
5. Visual feedback as to what level of the game I am on and what the current best score for the game has been.
6. To be given some form of alerted recognition when / if I complete the game.

As a developer, I want:
1. To have ease of access to the code underlying the application.
2. To have clear guidelines and instructions available through the README.md file.
3. To see well commented and indented code to allow for quick and easy reading of that code.
4. To be presented with a well structured file tree that makes finding the files simple too.
5. Additionally, to have a properly formatted README file that allows for quick navigation within the file itself.

## Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.

### Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

#### Features Left to Implement
Another feature idea

## Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

### JQuery
The project uses JQuery to simplify DOM manipulation.
### Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

#### Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

### Content
The sound clips were taken from [Soundjay.com](https://www.soundjay.com/button-sounds-1.html "Game Sounds"). A free to use site of various sound files.
The Trophy emoji was taken from [emojipedia.org](https://emojipedia.org/trophy/ "Emoji Trophy Image"). These are also free to use.
### Media
The photos used in this site were obtained from ...
### Acknowledgements
I received inspiration for this project from watching a number of videos & tutorials from various You Tube users that inspired my ideas for this project. 
Two in particular were - [George Louis](https://www.youtube.com/watch?v=iXscqYgZ7HQ "Root Code") & [Beau Carnes](https://www.youtube.com/watch?v=zwKoo7VDj44 "Edureka"). 
The Bootstrap Switch was garnered from GitHub user [graingert](<link href=”css/bootstrap-switch/bootstrap-switch.css” rel=”stylesheet”>)...