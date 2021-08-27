from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Item, db
from ..forms import ItemForm

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
@login_required
def items():
    items = Item.query.all()
    return {"items": [item.to_dict() for item in items]}

@item_routes.route('/<int:id>')
@login_required
def item(id):
    item = Item.query.get(id)
    return item.to_dict()

@item_routes.route('/', methods=["POST"])
@login_required
def create_item():
    form = ItemForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        item = Item(
            listId = form.data['listId'],
            content = form.data['content'],
        )

        db.session.add(item)
        db.session.commit()

        item = {
            "id": item.id,
            "listId": item.listId,
            "content": item.content,
        }
    return item

@item_routes.route('/<int:id>', methods=["POST"])
@login_required
def delete_item(id):
    item = Item.query.get(id)
    db.session.delete(item)
    db.session.delete

    return {'Success': id}
