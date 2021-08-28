from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import List,Item, db
from ..forms import ListForm

list_routes = Blueprint('lists', __name__)


@list_routes.route('/')
@login_required
def lists():
    lists = List.query.join(Item)
    # lists = db.session.Query(List).join(Item)
    return {"lists": [list.to_dict() for list in lists]}

@list_routes.route('/<int:id>')
@login_required
def list(id):
    list = List.query.get(id)
    return list.to_dict()

@list_routes.route('/', methods=["POST"])
@login_required
def create_list():
    form = ListForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        list = List(
            pageId = form.data['pageId'],
            name = form.data['name'],
        )

        # print(form.data['name'])s
        db.session.add(list)
        db.session.commit()

        list = {
            "id": list.id,
            "name": list.name,
            "pageId": list.pageId,
            "items": list.to_dict()["items"],
            "contents": list.to_dict()["contents"],

        }
    return list

@list_routes.route('/<int:id>/edit', methods=["POST"])
@login_required
def edit_list_name(id):
    name = request.form["name"]
    if len(name) <= 40:
        list = List.query.get(id)
        list.name = name
        db.session.commit()
        return {'Success': 'Success!'}
    return {'failure':"It is over 40"}

@list_routes.route('/<int:id>/delete', methods=["POST"])
@login_required
def delete_list(id):
    print(id)
    list = List.query.get(id)
    # print("CONTENT", list.content)
    db.session.delete(list)
    db.session.commit()

    return {'Success': id}
