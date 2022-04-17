# Lead routes
from json import dumps as jsondump
from flask import Blueprint #, jsonify, request
#from app import models

lead = Blueprint('lead', __name__)

# TODO: Deletar essa rota
@lead.route("/")
def test_home_route():
    return "LEAD ROUTE IS WORKING"

# TODO: Implementar Model Lead para que funcione a seguinte lógica:
'''
@lead.route('/lead', methods=['POST'])
def create_message():
    """Create lead"""
    item = request.get_json(force=True)
    lead_id = models.lead.create_lead(item)
    response = {
        'success': True,
        'lead': lead_id
    }
    status_code = 200
    return jsonify(response), status_code


@lead.route('/lead/', methods=['GET'])
def retrieve_lead(lead_id):
    """Retrieve lead"""
    response = models.lead.retrieve_lead(lead_id)
    status_code = 200
    return jsondump(response), status_code


@lead.route('/lead/', methods=['PUT'])
def update_lead(lead_id):
    """Update lead"""
    item = request.get_json(force=True)
    models.lead.update_lead(lead_id, item)
    response = {'success': True}
    status_code = 200
    return jsonify(response), status_code


@lead.route('/lead/', methods=['DELETE'])
def delete_lead(lead_id):
    """Delete lead"""
    models.lead.delete_lead(lead_id)
    response = {'success': True}
    status_code = 200
    return jsonify(response), status_code
'''
