from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Page(db.Model):
    __tablename__ = 'pages'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(40))

    user = relationship("User")
    list = relationship("List", cascade="all,delete")

    def to_dict(self):
        # lists = [el.to_dict() for el in self.list]
        lists = {el.id:el.to_dict() for el in self.list}
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.userId,
            "lists": lists
        }
