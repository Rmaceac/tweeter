# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

The goal here was to practice front-end development skills: HTML, CSS, jQuery, Ajax, Javascript event handlers etc. The goal was to produce a single page site which doesn't require a refresh to display newly posted tweets.

Features:

- The site scales for both mobile and large displays (over 1024px width).
- A text input form for posting your own tweets.
- Animated, toggle button to hide/reveal the text input area.
- A character counter with a highly arbitrary max count of 140. Counter indicates when too many characters have been entered.
- Error messages for empty or overfull inputs.
- An animated "back-to-the-top" button in the bottom-right hand corner of the screen.

## Screenshots

!["Screenshot of the main page formatted for a large display."](https://github.com/Rmaceac/tweeter/blob/master/docs/main-page.png?raw=true)
!["Screenshot of the main page formatted for a mobile device."](https://github.com/Rmaceac/tweeter/blob/master/docs/main-page-mobile.png?raw=true)
!["Screenshot of an error being displayed above the text input area. A red, negative character counter shows the user has gone over the character limit."](https://github.com/Rmaceac/tweeter/blob/master/docs/too-many-chars.PNG?raw=true)


## Getting Started

1. Use "npm install" to install all dependencies.
2. Use "npm run local" to start the server.
3. Navigate to localhost:8080 to view the site!

## Dependencies

- Express
- Body Parser
- chance
- mp5
- Node 5.10.x or above

### Dev Dependencies

- nodemon
