from app.models import db, Page

def seed_pages():
    page1 = Page(
        name='Things to do', userId="1"
    )
    page2 = Page(
        name='Places to go', userId="1"
    )

    db.session.add(page1)
    db.session.add(page2)

    db.session.commit()

def undo_pages():
    db.session.execute('TRUNCATE pages RESTART IDENTITY CASCADE;')
    db.session.commit()
