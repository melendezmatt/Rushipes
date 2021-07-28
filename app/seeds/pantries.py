from app.models import db, Pantry


# Adds a demo user, you can add other users here if you want
def seed_pantries():
    pantry1 = Pantry(user_id=1,  pantry_name='Townhouse Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Palm Springs, CA')
    pantry2 = Pantry(user_id=1,  pantry_name='Mansion Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Long Beach, CA')
    pantry3 = Pantry(user_id=1,  pantry_name='Cottage Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Lake Tahoe, CA')
    pantry4 = Pantry(user_id=1,  pantry_name='Apartment Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='New York City, NY')
    pantry5 = Pantry(user_id=2,  pantry_name='Home Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Seattle, WA')
    pantry6 = Pantry(user_id=2,  pantry_name='Garage Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Seattle, WA')
    pantry7 = Pantry(user_id=2,  pantry_name='Kitchen Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Portland, OR')
    pantry8 = Pantry(user_id=3,  pantry_name='Arizona Home Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Phoenix, AZ')
    pantry9 = Pantry(user_id=3,  pantry_name='California Home Pantry',  pantry_image_url= 'pantry_image_url.jpeg', location='Los Angeles, CA')

    db.session.add(pantry1)
    db.session.add(pantry2)
    db.session.add(pantry3)
    db.session.add(pantry4)
    db.session.add(pantry5)
    db.session.add(pantry6)
    db.session.add(pantry7)
    db.session.add(pantry8)
    db.session.add(pantry9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_pantries():
    db.session.execute('TRUNCATE pantries RESTART IDENTITY CASCADE;')
    db.session.commit()
