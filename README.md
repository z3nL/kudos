## Unit Assignment: Kudos Board

Submitted by: **Zen Lambertus**

Deployed Application (**required**): [Kudos Board Deployed Site](https://kudos-frontend-1fd5.onrender.com/)

### Application Features

#### CORE FEATURES

##### Home Page

- [ X ] **Home Page Display**
  - [ X ] Home page includes the following features:
    - [ X ] Header
    - [ X ] Banner
    - [ X ] Search bar
    - [ X ] List of boards
    - [ X ] Footer
- [ X ] **Display Boards**
  - [ X ] Users can view a list of all boards in a grid view on the home page.
  - [ X ] For each board displayed, users can see:
    - [ X ] An image/gif
    - [ X ] A board title
- [ X ] **Filter Boards**
  - [ X ] Home page includes navigation bar, drop down, or some other mechanism which allows users to filter boards by the following categories:
    - [ X ] All/Home (displays all boards)
    - [ X ] Recent (displays the 6 most recently created boards)
    - [ X ] Celebration
    - [ X ] Thank you
    - [ X ] Inspiration
  - [ X ] When a category is clicked, boards matching the specified category are displayed.
- [ X ] **Search Functionality**
  - [ X ] Users can use a search bar to search for boards by title on the home page.
  - [ X ] The search bar should include:
    - [ X ] Text input field
    - [ X ] Submit/Search Button
    - [ X ] Clear Mechanism
  - [ X ] Boards with a title containing the search query in the text input field are displayed in a grid view when the user:
    - [ X ] Presses the Enter key
    - [ X ] Clicks the Submit/Search button 
  - [ X ] User can delete all text from the text input field. 
  - [ X ] When all text is cleared from the text input field, all boards are displayed in a grid view
- [ X ] **View Board** 
  - [ X ] Users can click on a board in the grid view to navigate to a new page containing that board's details.
- [ X ] **Add New Board**
  - [ X ] Users can create a new board on the home page.
  - [ X ] When creating a new board, users can specify the:
    - [ X ] Title (required)
    - [ X ] Category (required)
    - [ X ] Author (optional)
  - [ X ] Items listed as required above must have a value to succesffuly create a new board.
  - [ X ] When the board is successfully created, it appears in the grid of boards. 
- [ X ] **Delete Board**
  - [ X ] User can delete boards on the home page. 
  - [ X ] When the board is deleted, the board disappears from the grid of boards. 

##### Board Page

- [ X ] **Display Cards**
  - [ X ] For a given board, the board's page displays a list of all cards for that board in a grid view.
  - [ X ] For each card should displayed, users can see the card's:
    - [ X ] Message
    - [ X ] Gif 
    - [ X ] Number of upvotes
    - [ X ] Delete button
- [ X ] **Add New Card**
  - [ X ] Users can make a new card associated with the current board. 
  - [ X ] To successfully create a new card, users must specify the following:
    - [ X ] Text message (required).
    - [ X ] A gif users can search for and select within the form using the [GIPHY API](https://developers.giphy.com/docs/api/) (required).
  - [ X ] Users are given the option to specify the author of the card.
  - [ X ] When the new card is successfully created, it appears in the grid of cards. 
- [ X ] **Upvote Card**
  - [ X ] Users can upvote a card.
  - [ X ] Update the vote count on the card tile when a user clicks the upvote icon.
  - [ X ] When the upvote icon is clicked the upvote count increases by 1. 
  - [ X ] A user can upvote a card multiple times. 
- [ X ] **Delete Card**
  - [ X ] Users can delete cards.
  - [ X ] When the user clicks the delete button for a card, the card disappears from the grid of cards. 
- [ X ] **Deployment**
  - [ X ] Website is deployed via Render.
  - [ X ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 

####  Stretch Features

- [ ] **Comments**
  - [ ] Users can add comments to cards.
  - [ ] To successfully add a comment, users must specify a text message body.
  - [ ] Users are given the option to specify the author of the comment.
  - [ ] Users can view comments on card in a pop-up modal that displays the card's:
    - [ ] Text message 
    - [ ] Gif
    - [ ] Author (if specified)
    - [ ] A list of the card's comments and each comment's:
      - [ ] Message body
      - [ ] Author (if specified)
  - [ ] Users can add multiple comments to a single card.
- [ X ] **Dark Mode** 
  - [ X ] Users can toggle between light mode and dark mode using a button displayed on the:
    - [ X ] Home Page
    - [ X ] Board Pages
  - [ X ] When the button is clicked, the color theme switches to the opposite of the current mode. 
  - [ X ] When dark mode is enabled:
    - [ X ] Text and icons use a light color
    - [ X ] The background uses a dark color
    - [ X ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ X ] When light mode is enabled:
    - [ X ] Text and icons use a dark color
    - [ X ] The background uses a light color
    - [ X ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ X ] The chosen mode (light or dark) persists when navigating from home page to board pages and vice versa.
  - [ X ] When the user first visits the site the theme defaults to light mode.
  - [ X ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast in both light and dark mode. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 
- [ ] **Pinned Cards**
  - [ ] Users can pin a card to the top of the board.
  - [ ] A Pin button is displayed on each card.
  - [ ] When the user clicks the Pin button of an unpinned card:
    - [ ] The card moves to the top of the grid view for that board.
    - [ ] There is some visual feedback to indicate a card's pin status (e.g., a pin icon, a border highlight).
    - [ ] The pin action is saved so that the card remains pinned after page refreshes.
  - [ ] When the user clicks the Pin button of a pinned card:
    - [ ] The card returns to its original position in the grid based on its creation time or to the end of the grid.
    - [ ] The card's pin status (e.g., a pin icon or highlight)  is removed.
    - [ ] The unpin action is saved so that the card remains unpinned after page refresh.
  - [ ] Pinned cards always appear at the top of the board, above unpinned cards.
  - [ ] If multiple cards are pinned, they maintain their pinned order based on the time they were pinned.
    - [ ] More recent pins should appear first.
- [ ] The pinned state of a card persists when:
  - [ ] navigating away from and back to the board.
  - [ ] refreshing the page. 
 


### Walkthrough Video

<div style="position: relative; padding-bottom: 64.55089820359281%; height: 0;"><iframe src="https://www.loom.com/embed/d26b3857c08a48ad8b4a53afdc599bc9?sid=00d37c9c-018d-4476-80b3-a53cf79e25be" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

https://www.loom.com/embed/d26b3857c08a48ad8b4a53afdc599bc9?sid=00d37c9c-018d-4476-80b3-a53cf79e25be

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Labs 3 and 4 were crucial aids in my project. I had zero clue how to set up Prisma and connect my backend to the database AND frontend, and the explanations in these labs were super informative and made me a lot more confident in meeting the deadline.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.  

One thing I would have done differently was enable the searching and filtering to work intersectionally.
When you try to run a search while a filter is active and vice versa on my deployment, it results in expected incorrect behavior.
This was not a requirement in the instructions, but it would have been nice to have since that's pretty intuitive to user experience.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I did not demo this week, but I liked how one of my peers made the transition from light to dark mode and back very smooth
rather than just an instant switch and I'd love to try that in my Capstone project

### Open-source libraries used

N/A

### Shout out

Shout out the entire CodePath team. I'm grateful I had this amazing learning opportunity and the entire team was
super helpful throughout the program's duration!