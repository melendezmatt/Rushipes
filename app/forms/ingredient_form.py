from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class IngredientForm(FlaskForm):
    ingredient_name=StringField('ingredient_name', validators=[DataRequired()])
    ingredient_image_url=StringField('ingredient_image_url')
    protein=IntegerField('protein', validators=[DataRequired()])
    fat=IntegerField('fat', validators=[DataRequired()])
    carbohydrate=IntegerField('carbohydrate', validators=[DataRequired()])
    about=StringField('about', validators=[DataRequired()])
    calories=IntegerField('calories', validators=[DataRequired()])
