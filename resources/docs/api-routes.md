## Users

- `GET /api/users/` returns all users
- `GET /api/users/<id>` returns a single user with id `<id>`

- `PATCH /api/users/<id>` update profile picture and/or biography of user with id `<id>`

## Authentication
- `GET /api/auth/logout` logs out a user

- `POST /api/auth/login` logs in a user
- `POST /api/auth/signup` signs up a user

## Pages
- `GET /api/pages` returns all pages in the database
- `GET /api/pages/<id>` returns a singular page

- `POST /api/pages` creates a new page if the user is logged in.

- `POST /api/pages/<id>/edit` updates the name on the page with id `<id>`

- `POST /api/pages/<id>/delete` deletes the page with id `<id>`

## Lists
- `GET /api/lists` returns all lists in the database
- `GET /api/lists/<id>` returns a singular list

- `POST /api/lists` creates a new list if the user is logged in.

- `POST /api/lists/<id>/edit` updates the name on the list with id `<id>`

- `POST /api/lists/<id>/delete` deletes the list with id `<id>`

## Items
- `GET /api/items` returns all items in the database
- `GET /api/items/<id>` returns a singular item

- `POST /api/items` creates a new item if the user is logged in.

- `POST /api/items/<id>/edit` updates the name on the item with id `<id>`

- `POST /api/items/<id>/delete` deletes the item with id `<id>`
