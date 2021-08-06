from app.models import db, Ingredient


# Adds a demo user, you can add other users here if you want
def seed_ingredients():
    ingredient1 = Ingredient(pantry_id=1, ingredient_name='Whole Wheat Bread',  ingredient_image_url= 'https://bakingamoment.com/wp-content/uploads/2019/01/IMG_2403-best-soft-whole-wheat-bread-recipe.jpg', about='Quality bread choice', protein=2, fat=5, carbohydrate=10, calories=110)
    ingredient2 = Ingredient(pantry_id=1, ingredient_name='Smoked Turkey',  ingredient_image_url= 'https://target.scene7.com/is/image/Target/GUEST_e321ebb5-836b-4ba9-ab74-bd8be687d056?wid=488&hei=488&fmt=pjpeg', about='The best meat to go inside sandwiches!', protein=11, fat=2, carbohydrate=5, calories=80)


    db.session.add(ingredient1)
    db.session.add(ingredient2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_ingredients():
    db.session.execute('TRUNCATE ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
