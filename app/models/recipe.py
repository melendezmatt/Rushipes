from .db import db

class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    recipe_name = db.Column(db.String(100))
    recipe_image_url = db.Column(db.String(255))
    prep_time=db.Column(db.Integer)
    cook_time=db.Column(db.Integer)
    servings=db.Column(db.Integer)
    type=db.Column(db.Integer)
    about = db.Column(db.String(500))
    instructions = db.Column(db.String(500))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User',  uselist=False, back_populates="recipe")


    def to_dict(self):
        return {
            'id': self.id,
            'recipe_name': self.recipe_name,
            'recipe_image_url': self.recipe_image_url,
            'user_id': self.user_id,
            'about': self.about,
            'prep_time': self.prep_time,
            'cook_time': self.cook_time,
            'servings': self.servings,
            'instructions':self.instructions,
            'type':self.type
        }
