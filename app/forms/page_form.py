from flask_wtf import FlaskForm
from wtforms import StringField


class PageForm(FlaskForm):
    name = StringField("name")
