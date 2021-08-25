from app.models import db, List

def seed_list():
    hobbies = List(
        name='Hobbies', pageId="1"
    )
    asia = List(
        name='Asia', pageId="2"
    )
    europe = List(
        name='Europe', pageId="2"
    )
    south_america = List(
        name='South America', pageId="2"
    )
    north_america = List(
        name='North America', pageId="2"
    )

    db.session.add(hobbies)
    db.session.add(asia)
    db.session.add(europe)
    db.session.add(south_america)
    db.session.add(north_america)

    db.session.commit()

def undo_list():
    db.session.execute('TRUNCATE lists RESTART IDENTITY CASCADE;')
    db.session.commit()
