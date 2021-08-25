from .db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class List(db.Model):
    __tablename__ = "lists"

    id = db.Column(db.Integer, primary_key=True)
    pageId = db.Column(db.Integer, ForeignKey("pages.id"), nullable=False)
    name = db.Column(db.String(40))

    page = relationship("Page")

    def to_dict(self):
        return {
            "id": self.id,
            "pageId": self.pageId,
            "name": self.name,
        }
