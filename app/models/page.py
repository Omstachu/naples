from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Page(db.Model):
    __tablename__ = 'pages'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(40))

    user = relationship("User", back_populates="pages")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
        }
