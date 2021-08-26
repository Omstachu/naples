from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField


class PageForm(FlaskForm):
    userId = IntegerField("userId")
    name = StringField("name")
