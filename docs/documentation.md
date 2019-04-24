#Angular 2 exam project
>Simple application for creating a user created post.
>The project is based on Angular 7 framework.
>CRUD application  using Kinvey for back end.
>The project is using bootstrap 4.
###Basic functionality:
#####Guest:
>Guest can see guest homepage and can log in with existing account and create a new user account.
#####Logged in user:
>Logged in users can see main page with all the user post displayed.
>They can see post details and leave a comment.
>If the user is the post creator he can edit or delete it.
>The user can also see comments for every post and the creator of the comment.
>User can see his information - user name, email, and creation date.
>User can logout.
####Administrator:
>Admin user can delete or edit all posts and delete comments.
#####Data validation:
#####Users:
>User name should be at least one character.
>Email should be a valid email.
>Password should be at least 4 characters long
>Only passwords are case sensitive
#####Posts:
>If invalid url is provided the post picture will be default picture stating that invalid url is posted.
>Post title should start with capital letter and should be at least 3 characters long.
>Post description should be at least 5 characters long.
>Creator field is automatically added.
#####Comments:
>Comments should be at least 4 characters long.
### Installing  / Getting started:
>The project requires npm -install to be performed

```shell
npm install
```
This will install dependencies prom package.json

## Developing:

### Built With:

###Dependencies:

        "@angular/animations": "~7.1.0",
        "@angular/common": "~7.1.0",
        "@angular/compiler": "~7.1.0",
        "@angular/core": "~7.1.0",
        "@angular/forms": "~7.1.0",
        "@angular/http": "^7.2.13",
        "@angular/platform-browser": "~7.1.0",
        "@angular/platform-browser-dynamic": "~7.1.0",
        "@angular/router": "~7.1.0",
        "@fortawesome/angular-fontawesome": "^0.3.0",
        "@fortawesome/fontawesome-svg-core": "^1.2.17",
        "@fortawesome/free-solid-svg-icons": "^5.8.1",
        "bootstrap": "^4.3.1",
        "bootswatch": "^4.3.1",
        "core-js": "^2.5.4",
        "ngx-toastr": "^10.0.2",
        "rxjs": "~6.3.3",
        "tslib": "^1.9.0",
        "zone.js": "~0.8.26"

### Prerequisites
You need Node.js ver9.2.0 installed

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/emoalb/angular-exam.git
cd angular-exam/
npm install
```


### Building

Angular 7 compiles automatically start of the development server is needed:

```shell
npm start
```


### Deploying / Publishing
>See readme.md
## Versioning

Not using any versioning standard.

## Database

This App is using Kinvey databse
## Licensing

MIT License 
See LICENSE file for more info

