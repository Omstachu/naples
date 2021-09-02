from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ListForm(FlaskForm):
    pageId = IntegerField("pageId", validators=[DataRequired()] )
    name = StringField("name")
