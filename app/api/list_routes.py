from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import List,Item

list_routes = Blueprint('lists', __name__)


@list_routes.route('/')
# @login_required
def lists():
    # lists = List.query.all()
    # list = List.query.join(Item).all()
    lists = List.query.join(List.item)
    print("----------------------------", dir(List.item))
    # lists = Item.query.join(List)
    return {"lists": [list.to_dict() for list in lists]}

@list_routes.route('/<int:id>')
# @login_required
def list(id):
    list = List.query.get(id)
    # list = List.join(Item).all()
    return list.to_dict()
