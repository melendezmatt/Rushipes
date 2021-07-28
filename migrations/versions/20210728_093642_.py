"""empty message

Revision ID: 9ddf97af9cb8
Revises: c3141da30426
Create Date: 2021-07-28 09:36:42.200094

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9ddf97af9cb8'
down_revision = 'c3141da30426'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('pantries', sa.Column('location', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('pantries', 'location')
    # ### end Alembic commands ###
