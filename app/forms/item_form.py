from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField


class ItemForm(FlaskForm):
    listId = IntegerField("listId")
    content = StringField("content")
