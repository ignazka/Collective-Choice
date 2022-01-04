# Collective Choice aka Codename Rottweiler

## Description

1. vote for worlds ending
2. users can push the red or green button, to destroy the world or save it from doom
3. if red or green button votes reach critical mass, world ends or is saved for ever
4. registered users are able to specify the reason of their choice

## User Stories

- **homepage** - As any user I want to be able to vote for worlds end or worlds survival
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **create comment** - As a user i want to create a comment, to publish my idea, why the world shall end
- **comment detail** - As a user, i want to edit my comment: edit text, delete my comment, report any comment, upvote/downvote comments
- **comments**- non user** - As a non user, i want to see all comments, made by users
- **vote bar**- any user** - As any kind of user, i want to be able to see the total result of all votes

## Backlog

List of other features outside of the MVPs scope

User profile:
- avatar
- location

Theme:
- dark theme

ChartJS:
- tags
- who voted where for what
- top 5 up or downvoted comments

Comments:
- tags - for further chartsJS usage
- up- downvote from users

## ROUTES:

- GET / 
  - renders the homepage (anon, user)
- GET /signup
  - redirects to / if user logged in (user)
  - renders the signup form (anon)
- POST /signup
  - redirects to / (user, anon)
  - sends body: (if no errors, if error redirects to /signup)
        - username
        - email
        - password
- GET /login
  - redirects to / if user logged in (user)
  - renders the login form (anon)
- POST /login
  - redirects to / if user logged in (user)
  - sends body: 
        - username
        - password
- POST /logout
  - redirects to / 
- GET /comments
  - renders comment view

## Models

User model
 
```
username: String
password: String
email: String
comment: reference to comment-object-id-object
downvote: [reference to comment-object-id-object]
upvote: [reference to comment-object-id-object]
```

Comment model

```
centent: String
downvotes: Int
upvotes: Int
``` 

Result model

```
downvotes: Int
upvotes: Int
``` 


## Links

### Trello/Kanban

[Link to our Kanban board](https://github.com/ignazka/Collective-Choice/projects/1)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/ignazka/Collective-Choice/)

[Deploy Link](https://collective-choice.herokuapp.com/)

### Slides

The url to your presentation slides

[Presentation Link](https://docs.google.com/presentation/d/172qhJvnk4zBE8IvQfn9HmVzQ8Jmnw8Tmc4jCkHYCPIw/edit?usp=sharing)

