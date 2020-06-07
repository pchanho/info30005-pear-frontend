# info30005-pear

INFO30005 Group Assignment - Pear

Authors: Chanho Park, Deevesh Shanmuganathan, Dimitri Sadikin, Gemma Seeley, Glenn Phillips

## Deliverable 4

In this deliverable, we are to finish our web application with its various components; models, routes, controllers and presentation.
This implementation addresses 3 functionalities previously created in deliverable 2. 
The 3 functionalities are:
  - Accounts
  - Conversations 
  - Support

The web application we have implemented includes the following pages:
  - Landing Page
  - Account Page
  - Home Page
  - Create conversaton Page
  - Chat Page
  - Support Page 
  - Report Page
  - ReportLanding Page
  - Admin Page
  - ReportListPage
  
  
## Functionalities

### Account
This feature supports the creation and usage of accounts throughout the system. When an account is created, the user’s password is hashed in the database to protect sensitive information. The account functionality also allows admins to keep track of conversations that a user has visited by looking at the database. Meanwhile the login feature only allows user access to the site if the input credentials match the credentials stored in the database. 

### Conversation
This feature enables users to create chat rooms based on a given category and topic. Users can optionally upload a cover photo to a conversation. Once a conversation has been created by a user, the user is automatically put in a chat room. The newly created chat room is then visible on the home page for other users to join. Once two participants have entered a chat room it is locked and no other participants can see the chat room from the home page. If one of the two participants in a chatroom leaves, the chat icon reappears on the conversation homepage and another participant can join the chatroom. The maximum number of participants is kept at two to preserve intimacy. 

### Support
This feature provides users with a variety of supportive functions. The first function is a video tutorial that gives users information on how to use Pear and provides general conversational advice. The second feature allows users to report a comment within a chatroom if they feel that it is offensive. The reported comment will then be stored in the database for admins to review at a later data using an admin login.

## Accessing Each Functionalities

To access each functionalities, examiner should aim to navigate through each functionalities as per the instructions in the subsections below. 
Note: Creation of an account or use of pre-existing account should be done to be able to access the other functionalities.

### Account
User starts at landing page (not included as part of any functionality)
https://info30005-pear-frontend.herokuapp.com/ 

As user click the "Join Now" button, user will be directed 
to https://info30005-pear-frontend.herokuapp.com/account
This url refers to the account functionality, allows users to create and manage their account utilising password encryption for account security. If user already have a pre-existing account, they can opt to sign in immediately.
Examiners are welcome to use the demo account we have made to test our authentification:
  - email: sally@gmail.com
  - password: sally

### Conversation
The conversation system home page is the first point of access for a pre existing user after they create or log in to their account (when user use the "Login" form instead of "Create Account").
Here, the user is provided with 2 options, to create a new conversation or to joing a pre-existing chat. If user opts for creating a new conversation, user is asked to input their custom choice of category and topic for the conversation and an optional picture for the conversation.
User is then redirected to the given chat page for that conversation. In chat, users are able to send messages to each other and report inappropriate messages (covered further in support functionality).

Note: only available chats will be shown in the home page (each chat can hold a maximum of only 2 people), to test this functionality, examiner can open a new tab in window with the incognito mode and access the website as a new user.

### Support
The support functionality of our project is divided into 2 subsections, "support" and "report". 

The support page includes 2 videos that aims to aid users in managing through the website and to provide tips on conversation starters.
The support page can also be accessed through the navigation bar in the homepage of our website. 

The report section refers to the feature provided by our website to flag/report inappropriate messages in the conversation page. This is accessed through clicking on the button on the right to every individual messages. When button is clicked, user is redirected to a new page where user can then inputs the reason for reporting said user (offender). When submitted, accountId of the offender, messsageId of the inappropriate message, and the reason are all compiled to a single report and recorded in the database. As this happens, user is send back to chat.
To check the database of submitted reports, we have created a follow up feature accessible only for admins of the website. To access this, we need to go back to the landing page (sign out) and scroll down to the bottom of the page. In the bottom of the page, there will be a button called Admin access. This button redirects user, in this case, admin to reportLanding page where to continue, admin should input a password given only to admins ("info30005"). This sends admin to admin page which contains features available to admins (as of now there is only "report list" feature).
By clicking on the report list button, admin is then redirected to a new page that showcases all of the submitted reports.

## Further sections on readme

4. "Provide the names of the views, routes, controllers, and models associated with each functionality (i.e. for each subset/group of functionalities)."
5. "Note on testing: We require groups to use the knowledge of testing covered in the subject to evaluate one core functionality that was implemented in Deliverable 3 (all views, models, controllers, routes). Provide the details of how to run the tests in the readme file."

Note: Requirements 4 and 5 are not included in this readme. They can be found in the backend readme file.













