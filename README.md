# Simon Game

## The Brief
> CREATE A MEMORY GAME
Build a simple single-player memory game inspired by Simon. Check out this short [video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4) and [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game))
entry to understand the rules of the game. Provide details in your README.md of the logic you have used to build your game as well as an explanation of how you tested your logic

## UX
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

<!--More often than not, modal overlays just don’t work well on tablets and mobile devices. They take some work to get right, and it takes time to address the different phone operating systems and resolve any glitches. They also have to be maintained to relate to the parent page. In many applications, they aren’t scaled properly to be optimized for mobile, or the window stutters as it starts up, which can throw off the position of the close button.-->
<!--Have a Modal Exit Strategy-->

<!--When it comes to exit strategy and placement, mobile modals defy logic and contradict everything we know about how people consume content. Based on human observation and analysis from some pretty smart people (like Luke Wroblewski) people generally hold their phone one-handed, using their thumb as the primary navigation tool. The design of most phones and apps actually emphasizes right-hand thumb usage.-->

<!--Yet modal close buttons are typically placed in the upper right corner, which forces the user to avert their attention back to the top of the window to close the window. With one-handed use, stretching your thumb to the top right corner of the screen is tough. I have big hands, and it’s difficult for me to thumb-reach the top right corner of the screen. Forget being left-handed; unless you read bottom to top, this movement is not intuitive or ideal.-->

<!--Upper right placement of the close button also increases the likelihood of the dreaded accidental refresh (when I fat-finger the refresh button instead of the close button because they’re both so small and on Safari they’re right next to each other).-->

<!--This poor close button placement also applies to tablets. Although the screen and the button are larger, it’s still unnatural to avert my eyes back to the top of the window in order to continue reading.-->

<!--Global marketers also need to understand how modals come across on older devices. Phones with Android 2.3 and below are going to have browser issues that lead to odd screen behavior, and millions of people around the world are still using these phones.-->

<!--It’s ironic: brands give so much thought to their online presence and place tremendous emphasis on design, features, and functionality, yet they don’t carry the same consideration through to modal windows.-->
<!--“Don’t Know Where to Put it? Throw it In a Modal!”-->

<!--This brings me to the underlying, more ominous issue: somewhere along the way, modals have gone from being a logical confirmation of an action to a popup dumping ground for content that doesn’t readily fit anywhere else. Too often, modals have become a hack to avoid thinking about content placement. In some cases, they reflect poor judgment and thoughtlessness on the part of developers, who see them as a gift of newfound space, an easy out. In other cases, last minute requests for additions, coupled with a lack of technical skill or resources to edit or pare down existing page content can be the underlying motive for creating a modal.-->

<!--Regardless, brands, content managers, and developers need to put more thought into when to use modals, and when to leave them out.-->

<!--    Brands, content managers, and developers need to put more thought into when to use modals-->

<!--tweet this-->

<!--Modal windows are great at showing users new information on the same page they’re currently on, thereby eliminating page reloads and conventional pop-ups.-->

<!--Conversely, there are occasions when you want to disrupt the flow and refocus your site visitor’s attention on a single, critical action. They’re also a useful tool for displaying images and videos. But even intentional and purposeful interruptions need to be intuitive, easy to complete and fluid.-->

[uxmag](https://uxmag.com/articles/modals-on-mobile-how-to-use-them-wisely "Modals")

<!--One of the most frustrating things users can experience on mobile sites is a modal window. On desktop, modals display without issue because of the large screen size. But on mobile, modal windows get cut off because of the small screen size. Users only see part of the modal window and can’t exit nor view it with ease.-->

<!--Viewing is even more difficult if users have to use an onscreen keyboard. The keyboard will pop up and cover a chunk of the screen, forcing users to have to scroll awkwardly to see the what they’re typing. If you want users to view your modal window content with ease, avoid using modal windows on your mobile site. Use an inline accordion instead.-->

<!--An inline accordion displays the content within the page. It doesn’t overlay it on top of the page like a modal. This prevents the window positioning and scrolling issues that users experience with modals. Not only that, but users never lose their context because inline accordions open on the same page. Modals take users out of their context when it covers up the screen.-->

<!--mobile-modal-->

<!--The way an inline accordion works is when the user taps the button, a panel collapses below it. The panel content is fully displayed on the mobile screen. Users no longer have to deal with partial viewing or awkward scrolling.-->

<!--The button should highlight so that users know what they tapped. The panel should have a title label that matches the button label. It should have an ‘X’ icon in the corner to close the panel just like closing a modal window.-->

<!--Stop making users struggle to view your modal windows. Use inline accordions in place of modal windows on your mobile site. When users can view the content on their screen with ease, they can complete their tasks without the frustration.-->

[uxmovement](https://uxmovement.com/mobile/why-you-should-avoid-using-modal-windows-on-mobile/ "Mobile Modals")

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