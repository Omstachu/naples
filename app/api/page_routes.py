from flask import Blueprint, request, jsonify
import json
from flask_login import login_required
from app.models import Page
from ..forms import PageForm

page_routes = Blueprint('pages', __name__)


@page_routes.route('/')
@login_required
def pages():
    pages = Page.query
    return {"pages": [page.to_dict() for page in pages]}
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

    # page_data = jsonify(dir(request.form))
    # page_data = dir(request.form.values)
    page_data = request.form["new_page"]

    print("-----------------------------------", page_data)
