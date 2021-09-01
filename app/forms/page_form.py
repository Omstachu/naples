from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class PageForm(FlaskForm):
    userId = IntegerField("userId", validators=[DataRequired()])
    name = StringField("name")
