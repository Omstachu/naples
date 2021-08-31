# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
* When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
        * So that I can seamlessly access the site's functionality
    * When I enter invalid data on the sign-up form:
        * I would like the website to inform me of the validations I failed to pass, and
        * repopulate the form with my valid entries (except my password).
       So that I can try again without needing to refill forms I entered valid data into.

## Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my username and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like a clear and easy to find button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page allowing me to login
      * So that I can easily log out to keep my information secure.

## Pages

### Viewing Pages

* As a logged in user, I want to be able to view a selection of of all the Pages I've created.
    * Clicking on a Page title will redirect me to that Page with all of it's associated Lists.
        * So that I can easily navigate to the Page of my choosing

### Create Pages

* As a logged in user, I want to be able to create new Pages.
  * While on the `/pages` Page
    * I can click a button that allows me to create a new Page with a name of my choosing
      * So that I can clearly organize my similar lists into one location.

### Updating Pages

* As a logged in user, I want to be able to edit the name of my Page by clicking an edit button associated with the Page when I am viewing the page list.
  * When I'm on the `/pages` page:
    * I can click "Edit" to make a change to the the name of the Page I have made.
      * So that I can fix any errors I make in naming my Page.


### Deleting Pages

* As a logged in user, I want to be able to delete my Page by clicking a Delete button associated with the Page when I am viewing the page list.
  * When I'm on the `/pages` page:
    * I can click "Delete" to permanently delete a Page I have made.
      * So that when I realize I no longer need an old Page, I can remove it to visually declutter my page list.

## Lists

### Viewing Lists

* As a logged in user, I want to be able to view a selection of the Lists associated with a given Page.
    * While on the `/pages/:id` page
        * Clicking on a List title will redirect me to that List with all of its items.
            * So that I can easily access the items contained within a List, or start adding items to said List.

### Create Lists

* As a logged in user, I want to be able to create new Lists.
  * While on the `/pages/:id` page
    * I can click a button that allows me to create a new List with a name of my choosing
      * So that I can clearly organize my similar items into one location.

### Updating Lists

* As a logged in user, I want to be able to edit the name of my List by clicking an edit button associated with the List when I am viewing a given Page.
  * When I'm on the `/pages/:id` page:
    * I can click "Edit" to make a change to the name of the List I have made.
      * So that I can fix any errors I make in naming my List.

### Deleting Lists

* As a logged in user, I want to be able to delete my List by clicking a Delete button associated with the List when I am viewing a given Page.
  * When I'm on the `/pages/:id` page:
    * I can click "Delete" to permanently delete a List I have made.
      * So that when I realize I no longer need an old List, I can remove it to visually declutter my Page.

### Items
* `View`
    * As a logged in user, I want to be able to view all of the item associated with a given List.
        * So that I can see all of my similar notes recorded in one location

* `Create`
    * As a logged in user, I want to add new Items to Lists.
        * While on the `/lists/:id` page
            * I can click a button that allows me to create a new Item with the content of my choosing
                * So that I can record information I would like to remember or use in the future
* `Update`
    * As a logged in user, I want to be able to edit the content of an Item by clicking an edit button associated with the Item when I am viewing a given List.
    * When I'm on the `/lists/:id` page:
        * I can click "Edit" to make a change to the content of the Item I created.
            * So that I can fix any errors I make in naming my List.
* `Delete`
    * As a logged in user, I want to be able to delete my Item by clicking a Delete button associated with the Item when I am viewing a given List.
  * When I'm on the `/lists/:id` page:
    * I can click "Delete" to permanently delete an Item I have made.
      * So that when I realize I no longer need an old Item, I can remove it to visually declutter my List.
