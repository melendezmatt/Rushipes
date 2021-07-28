from .db import db

class Pantry(db.Model):
    __tablename__ = 'pantries'

    id = db.Column(db.Integer, primary_key=True)
    pantry_name = db.Column(db.String(40))
    pantry_image_url = db.Column(db.String(255))
    location = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User',  uselist=False, back_populates="pantry")


    def to_dict(self):
        return {
            'id': self.id,
            'pantry_name': self.pantry_name,
            'pantry_image_url': self.pantry_image_url,
            'user_id': self.user_id
        }
