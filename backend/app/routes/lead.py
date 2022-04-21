# Lead routes
from json import dumps as jsondump
from flask import Blueprint, jsonify, request
from app import models

lead = Blueprint('lead', __name__)

# TODO: Deletar essa rota
@lead.route("/")
def home():
    """Hello"""
    return "Funcionando esta..."