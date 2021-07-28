from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Pantry

class PantryForm(FlaskForm):
    pantry_name=StringField('pantry_name', validators=[DataRequired()])
    pantry_image_url=StringField('pantry_image_url')
    location=StringField('location', validators=[DataRequired()])
