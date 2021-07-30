from flask import Blueprint, request
from flask_login import login_required
from app.models import User, Pantry, db, Recipe
from app.forms import PantryForm, RecipeForm

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

#Get All Pantries ['GET']
@user_routes.route('/<int:id>/all-pantries', methods=['GET'])
def get_all_pantries(id):
    pantries = Pantry.query.filter(Pantry.user_id == id).all()
    return { 'pantries': [pantry.to_dict() for pantry in pantries]}

#Get Single Pantry ['GET']
@user_routes.route('/<int:id>/pantry/<int:pantryId>', methods=['GET'])
def get_single_pantry(id, pantryId):
    pantry = Pantry.query.filter(Pantry.user_id == id, Pantry.id == pantryId).first()
    return pantry.to_dict()

#Create Single Pantry ['POST']
@user_routes.route('/<int:id>/new-pantry', methods=['POST'])
def post_single_pantry(id):
    form = PantryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_pantry = Pantry(
            user_id = id,
            pantry_name = form.data['pantry_name'],
            pantry_image_url = form.data['pantry_image_url'],
            location = form.data['location'],
            about = form.data['about']
        )
        db.session.add(new_pantry)
        db.session.commit()
        return new_pantry.to_dict()
    return {"errors": form.errors}

#Update Single Pantry ['PUT']
@user_routes.route('/<int:id>/pantry/<int:pantryId>', methods=['PUT'])
def edit_single_pantry(id, pantryId):
    form = PantryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        old_pantry = Pantry.query.filter(Pantry.id == pantryId, Pantry.user_id == id).first()
        form.populate_obj(old_pantry)
        old_pantry.pantry_name = form.data['pantry_name']
        old_pantry.pantry_image_url = form.data['pantry_image_url']
        old_pantry.location = form.data['location'],
        old_pantry.about = form.data['about']
        db.session.commit()
        return old_pantry.to_dict()
    return {"errors": form.errors}


#Delete Single Pantry ['DELETE']
@user_routes.route('/<int:id>/pantry/<int:pantryId>', methods=['DELETE'])
def delete_single_pantry(id, pantryId):
    pantry = Pantry.query.filter(Pantry.id == pantryId and Pantry.user_id == id).first()
    db.session.delete(pantry)
    db.session.commit()
    return pantry.to_dict()

#Get All Recipes ['GET']
@user_routes.route('/<int:id>/all-recipes', methods=['GET'])
def get_all_recipes(id):
    recipes = Recipe.query.filter(Recipe.user_id == id).all()
    return { 'recipes': [recipe.to_dict() for recipe in recipes]}

#Get Single Recipe ['GET']
@user_routes.route('/<int:id>/recipe/<int:recipeId>', methods=['GET'])
def get_single_recipe(id, recipeId):
    recipe = Recipe.query.filter(Recipe.user_id == id, Recipe.id == recipeId).first()
    return recipe.to_dict()

#Create Single Recipe ['POST']
@user_routes.route('/<int:id>/new-recipe', methods=['POST'])
def post_single_recipe(id):
    form = RecipeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_recipe = Recipe(
            user_id = id,
            recipe_name = form.data['recipe_name'],
            recipe_image_url = form.data['recipe_image_url'],
            about = form.data['about'],
            type = request.json['type'],
            instructions =  form.data['instructions'],
            cook_time = request.json['cook_time'],
            prep_time = request.json['prep_time'],
            servings = request.json['servings'],
        )
        db.session.add(new_recipe)
        db.session.commit()
        return new_recipe.to_dict()
    return {"errors": form.errors}

#Delete Single Recipe ['DELETE']
@user_routes.route('/<int:id>/recipe/<int:recipeId>', methods=['DELETE'])
def delete_single_recipe(id, recipeId):
    recipe = Recipe.query.filter(Recipe.id == recipeId and Recipe.user_id == id).first()
    db.session.delete(recipe)
    db.session.commit()
    return recipe.to_dict()
