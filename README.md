# Friday Quiz

Welcome to the Friday Quiz. The Friday quiz started out as a microsoft form sent out every week by a guy named Peter. Over time this 15 question quiz became so popular it had paid advertising with the form. The quiz itself is a mix of general knowledge and current events. Peter was a victim of his own success and if he missed a week or took annual leave, hundreds of emails and whatsapp messages would be sent looking for the latest link to the quiz. 

Scoring was equally important and sharing a screenshot of the score around the office email or a quick message to the whatsapp ex. "9.. not my best" was custom. So the purpose of this website is to provide a new easy to use quiz, similar in format and ready to populate with new questions each and every Friday.

![Responsive Mockup](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/responsivedesign.jpg)

- [Friday Quiz](#friday-quiz)
  * [Design](#design)
    + [Site Overview](#site-overview)
    + [Features Left to Implement](#features-left-to-implement)
  * [Testing](#testing)
    + [Device Testing](#device-testing)
    + [Bug Fixes](#bug-fixes)
    + [Validator Testing](#validator-testing)
    + [Unfixed Bugs](#unfixed-bugs)
  * [Deployment](#deployment)
  * [Credits](#credits)
    + [Media](#media)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## Design 

- The quiz is a single webpage with a static URL. 
- The user should be able to access all functionality within a single page and using javascript receive relevant data.
- The questions are displayed one by one and navigation + submit buttons appear when needed

 __wireframes__
- The design did not differ much from the original wireframes.
![Wireframe](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/wireframe_Start-Page.png)

 __color scheme__
- The color scheme was inspired by newspapers typography and recycled napkins.
![Color Scheme](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/color%20scheme%20p2.jpg)



### Site Overview

 __top-section__

 - The Friday Quiz heading acts like a logo. Underneath is the issue date which is a paragraph.
 - The section uses flex design to cater for mobile use.
 - From reading this section the user should be able to judge that this is the lastest quiz.
 - Future Dev:  Create a navigation option that allows users to select previous quizzes and redo them.
  
![Top Section](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/top-section.jpg)

 __question-panel__

 - The question panel on a clear white background shows the current question number, the question and answer options.
 - From here the user can click on any of the answers and the selected button will be highlighted
 - A simple centre aligned design should allows users to clearly identify where to read the question and how to answer. 

![Question Panel](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/question-panel.jpg)

  - When opening the page the first question and set of answers is automatically populated
  - The user selects an answer and clicks the next button
  - The question area then displays the next question up to a total of 15 questions.
  - On reaching the 15th the submit button will appear.
  - The user can navigate back and foreward through the questions to make changes.
  - Once submit is selected there is no options to navigate
  - The user is presented with their final score and a customised gif based on their score 
  - ![quiz-completed](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/quiz-completed.jpg)
 
 - As well as 2 further button options
    1) See answers which opens in a modal pop up view showing: questions | answer | user answer
    ![results](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/results-modal.jpg)
    
    2) Restart which will start the quiz again

 __navigation__

  - The navigation buttons are at the bottom of the question-panel
  - Next, Previous and Submit are displayed based on where the user is in the question order.
  - If the user is on the last question then submit will appear
  - If the user is on the first question both previous and submit will be hidden
  
  - Future Dev: 
  - Change the navigation buttons to symbols and contrast the design to the answer buttons.
  - Update the button design and add alerts to seek confirmation of choice based on how long the user is on this question.

![Navigation](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/navigation.jpg)

 __message-board__

  - This section will the site owner to provide quiz updates, feedback, notices or random jokes throughout the quiz. 

![Message-Board](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/message-board.jpg)


 __The Footer__ 

  - The footer section includes links to the relevant social media sites. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media

![Footer](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/docs/footer-social-links.jpg)

### Features Left to Implement

- I would like to add a share option to allow users to copy their score to the clipboard and paste a formatted message to whatsapp groups.
- I would like to create a seperate js file to store questions to make it easier to load new quizzes.

## Testing 

- Testing was done through lighthouse on google chrome
 __Desktop__
![Desktop](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/testing/lighthouse_desktop-report_p2.jpg)
- No errors were found, 100% across the board

 __Mobile__
![Mobile](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/testing/lighthouse_mobile-report_p2.jpg)
- No errors were found, 96% performance

### Device Testing
- I have tested the site on Chrome and Safari on desktop, as well as Chrome and Browser on a samsung s20 and safari on an ipad 9.7in.

-During tests I found on mobile that the modal that displays the list of answers and questions when completing the quiz would not allow scrolling past the 14th question. To fix this I decrease the content div padding.

### Bug Fixes
- On clicking previous it allowed question no to go to zero and minus values. This also caused an error for the create question function which relied on this index.
- To fix I wrote an if statement to ensure that the first question will display if the number is equal to 0 and hide the previous button to prevent it happening.

- User Answers are  pushed to the question array but the value was the event id and not the answer value.
- To allow comparision between the answers in the array and user answer I renamed all the ids a,b,c,d to allow comparison within functions between user answer and actual correct answer

### Validator Testing 

- HTML
  - No errors were returned when passing through the official 
  - ![W3C validator](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/testing/html%20validator.jpg)
- CSS
  - No errors were found when passing through the official 
  - ![(Jigsaw) validator](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/testing/css%20validator.jpg)
- JS
  - A few errors regarding template literals not valid in IE6  
  - ![(Jigsaw) validator](https://github.com/alanmac17/pp2-fridayquiz/blob/main/assets/testing/javascript_validator_results.jpg)

-jshit 
 Metrics
- There are 10 functions in this file.
- Function with the largest signature take 1 arguments, while the median is 0.
- Largest function has 29 statements in it, while the median is 4.
- The most complex function has a cyclomatic complexity value of 6 while the median is 1.5.
- 23 warnings about const
- 0 errors

### Unfixed Bugs

When moving from one question to another using previous/next, the selected answer is highlighted with a white border, if a user changes their answer while it clearly shows the new selection; the old selection remains with a white border until the next/previous button is selected.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://alanmac17.github.io/pp2-fridayquiz/


## Credits 

A list of tutorials were reviewed while working through the project. 

--Content:
-Modal Code
https://w3collective.com/popup-modal-javascript/
https://www.w3schools.com/howto/howto_css_modals.asp

-Some similar container and button css styling fields were used as a template and modified to the site design.
https://www.codingninjas.com/blog/2021/08/02/how-to-create-a-quiz-app-using-javascript/![image](https://user-images.githubusercontent.com/82409072/167744188-dcc6f8b6-0d99-4aa9-b619-6ec15ea72dbf.png)

--Other Site reviewed:
- Learn JavaScript by Building 7 Games - Full Course (https://www.youtube.com/watch?v=ec8vSKJuZTk)
- Javascript Tutorial: Make a quiz (https://www.youtube.com/watch?v=C7NsIRhoWuE)
- Build A Text Adventure Game With JavaScript (https://www.youtube.com/watch?v=R1S_NhKkvGA)
- Build a Quiz App with HTML, CSS, and JavaScript (https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)
- Building a Multiple Choice Quiz | Javascript | Tutorial 24 (https://www.youtube.com/watch?v=LQGTb112N_c)
- Create Quiz Web App using HTML CSS and JavaScript | Quiz App JavaScript (https://www.youtube.com/watch?v=WHHYz8rZmDU)
- Build A Quiz App With Javascript (Plus ES6 Classes) | Js Project 8 Of 10 (https://www.youtube.com/watch?v=bGQ9sIHZdlo)
- https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/!


### Media
All gifs were taken from giphy.com

-Responsive Image
https://ui.dev/amiresponsive?url=https://alanmac17.github.io/pp2-fridayquiz/

-Favicon
https://favicon.io/favicon-converter/

-Code Beautifier
https://codebeautify.org/jsvalidate

