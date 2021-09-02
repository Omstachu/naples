from flask import Blueprint, request, jsonify
import json
from flask_login import login_required
from app.models import Page, db
from ..forms import PageForm

page_routes = Blueprint('pages', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            # errorMessages.append(f'{field} : {error}')
            errorMessages.append(f'{error}')
    return errorMessages

@page_routes.route('/')
@login_required
def pages():
    pages = Page.query
    return {page.id:page.to_dict() for page in pages}
    return [page.to_dict() for page in pages]
    # return [page.to_dict() for page in pages]

@page_routes.route('/<int:id>')
@login_required
def page(id):
    page = Page.query.get(id)
    return page.to_dict()

@page_routes.route('/', methods=["POST"])
@login_required
def create_page():
    form = PageForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        page = Page(
            userId = form.data['userId'],
            name = form.data['name']
        )
        db.session.add(page)
        db.session.commit()
        # print("-------------------INSIDE VALIDATE", form.data)

        page = {
            "id": page.id,
            "name": page.name,
            "userId": page.userId,
            "lists": page.to_dict()["lists"]
        }
        return page
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@page_routes.route('/<int:id>/edit', methods=["POST"])
@login_required
def edit_page_name(id):
    name = request.form["name"]
    if len(name) > 0:
        page = Page.query.get(id)
        page.name = name
        db.session.commit()
        return {'Success': 'Success!'}
    return {'errors':"Cannot be blank"}, 401


@page_routes.route('/<int:id>/delete', methods=["POST"])
@login_required
def delete_page(id):
    print(id)
    page = Page.query.get(id)
    # print("CONTENT", page.content)
    db.session.delete(page)
    db.session.commit()

    return {'Success': id}
