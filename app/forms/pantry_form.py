from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class PantryForm(FlaskForm):
    pantry_name=StringField('pantry_name', validators=[DataRequired()])
    pantry_image_url=StringField('pantry_image_url')
    location=StringField('location', validators=[DataRequired()])
