from app.models import db, List

def seed_list():
    list1 = List(
        name='Things to do', userId="1"
    )
    list2 = List(
        name='Places to go', userId="1"
    )

    db.session.add(list1)
    db.session.add(list2)

    db.session.commit()

def undo_list():
    db.session.execute('TRUNCATE pages RESTART IDENTITY CASCADE;')
    db.session.commit()
