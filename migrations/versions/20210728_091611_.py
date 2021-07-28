"""empty message

Revision ID: c3141da30426
Revises: ffdc0a98111c
Create Date: 2021-07-28 09:16:11.903989

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c3141da30426'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pantries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('pantry_name', sa.String(length=40), nullable=True),
    sa.Column('pantry_image_url', sa.String(length=255), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pantries')
    # ### end Alembic commands ###
