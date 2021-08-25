from flask.cli import AppGroup
from .users import seed_users, undo_users
from .pages import seed_pages, undo_pages
from .lists import seed_list, undo_list
from .items import seed_item, undo_item
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_pages()
    seed_list()
    seed_item()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_pages()
    undo_list()
    undo_item()
    # Add other undo functions here
