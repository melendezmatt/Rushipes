from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length

class PantryForm(FlaskForm):
    pantry_name=StringField('pantry_name', validators=[DataRequired('Please provide a name for this pantry.'), Length(max=40, message="The pantry name provided is too long.")])
    pantry_image_url=StringField('pantry_image_url', validators=[Length(max=255, message="The URL provided is too long.")])
    location=StringField('location', validators=[DataRequired('Please provide a location for this pantry.'), Length(max=255, message="The location provided is too long.")])
    about=StringField('about', validators=[DataRequired('Please provide a description for this pantry.'), Length(max=500, message="The description provided is too long.")])
