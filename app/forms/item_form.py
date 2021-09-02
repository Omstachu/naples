from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ItemForm(FlaskForm):
    listId = IntegerField("listId", validators=[DataRequired()])
    content = StringField("content")
