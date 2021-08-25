from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Page(db.Model):
    __tablename__ = 'pages'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(40))

    user = relationship("User")
    # list = relationship("List", back_populates="page")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.userId,
        }
