from app.models import db, Recipe

# Adds a demo user, you can add other users here if you want
def seed_recipes():
    recipe1 = Recipe(user_id=1,  recipe_name='Kimchi Fried Rice',  recipe_image_url= 'recipe_image_url.jpeg', about="Mom's favorite recipe!", instructions='1. Make the Fried Rice', type=0, servings=4, prep_time=25, cook_time=15)
    recipe2 = Recipe(user_id=1,  recipe_name='Banana Creme Pie',  recipe_image_url= 'recipe_image_url.jpeg', about='Love this dessert to the bottom of my heart', instructions='1. Make the Banana Creme Pie', type=2, servings=8, prep_time=30, cook_time=45)
    recipe3 = Recipe(user_id=1,  recipe_name='Egg White Scramble',  recipe_image_url= 'recipe_image_url.jpeg', about='My go-to breakfast', instructions='1. Scramble eggs with vegetables', type=0, servings=4, prep_time=10, cook_time=15)
    recipe4 = Recipe(user_id=1,  recipe_name='BLT Sandwich',  recipe_image_url= 'recipe_image_url.jpeg', about="Can't go wrong with BLT, right?", instructions='1. Stack bread', type=0, servings=1, prep_time=15, cook_time=5)
    recipe5 = Recipe(user_id=1,  recipe_name='Yogurt Parfait',  recipe_image_url= 'recipe_image_url.jpeg', about='Such an easy recipe!', instructions='1. Eat the yogurt', type=1, servings=2, prep_time=5, cook_time=0)

    db.session.add(recipe1)
    db.session.add(recipe2)
    db.session.add(recipe3)
    db.session.add(recipe4)
    db.session.add(recipe5)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_recipes():
    db.session.execute('TRUNCATE recipes RESTART IDENTITY CASCADE;')
    db.session.commit()
