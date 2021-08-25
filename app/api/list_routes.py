from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import List

list_routes = Blueprint('lists', __name__)


@list_routes.route('/')
# @login_required
def lists():
    lists = List.query.all()
    return {"lists": [list.to_dict() for list in lists]}

@list_routes.route('/<int:id>')
# @login_required
def list(id):
    list = List.query.get(id)
    return list.to_dict()
