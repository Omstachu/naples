from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Item(db.Model):
    __tablename__ = "items"

    id = db.Column(db.Integer, primary_key=True)
    listId = db.Column(db.Integer, ForeignKey("list.id"), nullable=False)
    content = db.Column(db.String(40))

    list = relationship("list", back_populates="items")

    def to_dict(self):
        return {
            "id": self.id,
            "listId": self.listId,
            "content": self.content,
        }
