# User-facing routes

## `/login`

### Log in page

This page displays a log in form

* `GET /login`
* `POST /login`

## `/signup`

This page displays a signup form.

### Sign up page

* `GET /signup`
* `POST /signup`

## `/pages`

This page displays a list of all Pages the user has created. The user will have the ability to click on a Page title to navigate into that Page. Additionally, the user will have access to create, edit, and delete buttons to add a new Page, modify the name of and existing Page, or permanently remove it.

* `GET /pages`
* `POST /pages`
* `POST /pages/:id/edit`
* `POST /pages/:id/delete`

## `/pages/:id`

This page displays a list of all Lists associated with the Page with a given ID. The user will be able to click on a List title to navigate into that List. Additionally, the user will have access to create, edit, and delete buttons to add a new List, modify the name of and existing List, or permanently remove it.

* `GET /pages/:id`
* `POST /lists`
* `POST /lists/:id/edit`
* `POST /lists/:id/delete`

## `/lists/:id`

This page displays a list of all the Items associated with the List with a given ID. The user will have the ability to create, edit, and delete buttons to add a new Item, modify the name of and existing Item, or permanently remove it

* `GET /lists/:id`
* `POST /items`
* `POST /items/:id/edit`
* `POST /items/:id/delete`
