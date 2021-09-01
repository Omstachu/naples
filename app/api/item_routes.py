from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Item, db
from ..forms import ItemForm

item_routes = Blueprint('items', __name__)

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



@item_routes.route('/')
@login_required
def items():
    # items = Item.query.order._by(Item.id).all()
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


@item_routes.route('/<int:id>/edit', methods=["POST"])
@login_required
def edit_item(id):
    #     # post form should be modified to editForm

    content = request.form["content"]
    if len(content) <= 40:
        item = Item.query.get(id)
        item.content = content
        db.session.commit()
        return {'Success': 'Success!'}
    return {'failure':"It is over 40"}

@item_routes.route('/<int:id>/delete', methods=["POST"])
@login_required
def delete_item(id):
    print(id)
    item = Item.query.get(id)
    print("CONTENT", item.content)
    db.session.delete(item)
    db.session.commit()

    return {'Success': id}
