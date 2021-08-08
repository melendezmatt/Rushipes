from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')

def is_email(form, field):
    email=form.data['email']
    if '@' not in email:
        raise ValidationError('Invalid email address')
    if '.' not in email:
        raise ValidationError('Invalid email address')

class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired('Please type in your email.'), user_exists, is_email])
    password = StringField('password', validators=[
                           DataRequired('Please type in your password.'), password_matches])
