from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Pantry

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
    pantry = Pantry.query.filter(Pantry.user_id == id and Pantry.id == pantryId)
    return pantry.to_dict()

#Create Single Pantry ['POST']
#@user_routes.route('/<int:id>/new-pantry/', methods=['POST'])



#Update Single Pantry ['PUT']
#@user_routes.route('/<int:id>/pantry/<int:pantryId>', methods=['PUT'])



#Delete Single Pantry ['DELETE']
@user_routes.route('/<int:id>/pantry/<int:pantryId>', methods=['DELETE'])
def delete_single_pantry(id, pantryId):
    pantry = Pantry.query.filter(Pantry.user_id == id and Pantry.id == pantryId)
