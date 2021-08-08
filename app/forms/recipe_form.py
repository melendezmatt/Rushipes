from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class RecipeForm(FlaskForm):
    recipe_name=StringField('recipe_name', validators=[DataRequired('Please provide a recipe name.'), Length(max=100, message="The recipe name provided is too long.")])
    recipe_image_url=StringField('recipe_image_url', validators=[Length(max=255, message="The URL provided is too long.")])
    prep_time=IntegerField('prep_time', validators=[DataRequired('Please provide a prep time.')])
    cook_time=IntegerField('cook_time', validators=[DataRequired('Please provide a cook time')])
    servings=IntegerField('servings', validators=[DataRequired('Please provide the amount of servings')])
    about=StringField('about', validators=[DataRequired('Please provide a description for your recipe.'), Length(max=500, message="The description provided is too long.")])
    instructions=StringField('instructions', validators=[DataRequired('Please provide instructions for your recipe'), Length(max=500, message="The instructions provided are too long.")])
    type=IntegerField('type', validators=[DataRequired('Please provide a type for your precipe.')])
