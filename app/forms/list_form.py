from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField


class ListForm(FlaskForm):
    pageId = IntegerField("pageId")
    name = StringField("name")
