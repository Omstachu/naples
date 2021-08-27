from .db import db
from flask import jsonify
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class List(db.Model):
    __tablename__ = "lists"

    id = db.Column(db.Integer, primary_key=True)
    pageId = db.Column(db.Integer, ForeignKey("pages.id"), nullable=False)
    name = db.Column(db.String(40))

    page = relationship("Page")
    item = relationship("Item")


    def to_dict(self):
        contents = [el.content for el in self.item]
        items = [(el.content, el.id) for el in self.item]

        return {
            "id": self.id,
            "pageId": self.pageId,
            "name": self.name,
            "contents": contents,
            "items": items,
        }
