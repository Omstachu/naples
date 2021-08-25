from app.models import db, Item

def seed_item():
    tennis = Item(
        content='Tennis', listId="1"
    )
    taiwan = Item(
        content='Taiwan', listId="2"
    )
    japan = Item(
        content='Japan', listId="2"
    )
    czech = Item(
        content='Czech Republic', listId="3"
    )
    germany = Item(
        content='Germany', listId="3"
    )

    db.session.add(tennis)
    db.session.add(taiwan)
    db.session.add(japan)
    db.session.add(czech)
    db.session.add(germany)

    db.session.commit()

def undo_item():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
