from .db import db

class Ingredient(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    ingredient_name = db.Column(db.String(100))
    ingredient_image_url = db.Column(db.String(255))
    protein=db.Column(db.Integer)
    fat=db.Column(db.Integer)
    carbohydrate=db.Column(db.Integer)
    calories=db.Column(db.Integer)
    about = db.Column(db.String(500))
    pantry_id = db.Column(db.Integer, db.ForeignKey('pantries.id'), nullable=False)

    pantry = db.relationship(
        "Pantry",  uselist=False,
        back_populates="ingredient"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'ingredient_name': self.ingredient_name,
            'ingredient_image_url': self.ingredient_image_url,
            'about': self.about,
            'protein' : self.protein,
            'fat':  self.fat,
            'carbohydrate' : self.carbohydrate,
            'calories': self.calories,
            'about' :  self.about,
            'pantry_id' : self.pantry_id
        }
