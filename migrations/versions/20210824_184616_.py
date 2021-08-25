"""empty message

Revision ID: 691ec7cac6a8
Revises: ffdc0a98111c
Create Date: 2021-08-24 18:46:16.709077

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '691ec7cac6a8'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('lists',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('pageId', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=True),
    sa.ForeignKeyConstraint(['pageId'], ['pages.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('listId', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=40), nullable=True),
    sa.ForeignKeyConstraint(['listId'], ['lists.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('items')
    op.drop_table('lists')
    op.drop_table('pages')
    # ### end Alembic commands ###