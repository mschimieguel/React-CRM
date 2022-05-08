from app import db


class Lead(db.Model):

    __tablename__ = 'lead'  # Real table name, since is case sensitive

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=True)
    telefone = db.Column(db.String, nullable=True)
    tipo = db.Column(db.String, nullable=True)
    etapa = db.Column(db.Integer, nullable=True)
    data = db.Column(db.DateTime, nullable=True)
    expectativa = db.Column(db.DateTime, nullable=True)

    def __init__(self, nome, email=None, telefone=None, tipo=None, etapa=None, data=None, expectativa=None) -> None:
        """Constructor to help write data"""

        self.nome = nome
        self.email = email
        self.telefone = telefone
        self.tipo = tipo
        self.etapa = etapa
        self.data = data
        self.expectativa = expectativa

    def __repr__(self) -> str:
        """Object representation"""
        return self.nome
