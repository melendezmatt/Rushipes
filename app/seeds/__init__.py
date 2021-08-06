from app.seeds.pantries import seed_pantries, undo_pantries
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .recipes import seed_recipes, undo_recipes
from .ingredients import seed_ingredients, undo_ingredients

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_pantries()
    seed_recipes()
    seed_ingredients()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_pantries()
    undo_recipes()
    undo_ingredients()
    # Add other undo functions here
