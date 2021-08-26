from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Page

page_routes = Blueprint('pages', __name__)


@page_routes.route('/')
@login_required
def pages():
    pages = Page.query.all()
    return {"pages": [page.to_dict() for page in pages]}
    # return [page.to_dict() for page in pages]

@page_routes.route('/<int:id>')
@login_required
def page(id):
    page = Page.query.get(id)
    return page.to_dict()
