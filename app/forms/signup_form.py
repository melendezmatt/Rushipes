from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired('Please provide a username.'), username_exists, Length(max=40, message='Your username is too long.')])
    email = StringField('email', validators=[DataRequired('Please provide an email.'), user_exists, Length(max=255, message='Your email is too long.')])
    password = StringField('password', validators=[DataRequired('Please provide a password.')])
