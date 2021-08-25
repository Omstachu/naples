from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Item

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
# @login_required
def items():
    items = Item.query.all()
    return {"items": [item.to_dict() for item in items]}

@item_routes.route('/<int:id>')
# @login_required
def item(id):
    item = Item.query.get(id)
    return item.to_dict()
