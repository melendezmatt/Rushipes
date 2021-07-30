from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class RecipeForm(FlaskForm):
    recipe_name=StringField('recipe_name', validators=[DataRequired()])
    recipe_image_url=StringField('recipe_image_url')
    prep_time=IntegerField('prep_time', validators=[DataRequired()])
    cook_time=IntegerField('cook_time', validators=[DataRequired()])
    servings=IntegerField('cook_time', validators=[DataRequired()])
    about=StringField('about', validators=[DataRequired()])
    instructions=StringField('instructions', validators=[DataRequired()])
    type=IntegerField('type', validators=[DataRequired()])
