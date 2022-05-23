"""Compile of useful fuctions to manage database"""

import json
import os
from app.models import Lead
from app.models import FakeLead

def verify_lead_is_populated(db) -> bool:
    """Verify if lead is populated already"""
    response = db.engine.execute(" SELECT * FROM lead LIMIT 1")
    return not response.fetchall()

def populate_database(db):
    """Populate lead table."""
    with open(
        os.path.join(
            os.path.dirname(__file__),
            'initial_leads.json'
            )
        ) as json_file:
        leads = json.load(json_file)
    for lead in leads:
        query = (
            "INSERT OR IGNORE INTO lead" 
            "   (nome, email, telefone, tipo, etapa, data, expectativa) "
            "VALUES "
            f"('{lead['nome']}', '{lead['email']}', '{lead['telefone']}', "
            f"'{lead['tipo']}', '{lead['etapa']}', "
            f"'{lead['data'] + '00:00:00'}', "
            f"'{lead['expectativa'] + '00:00:00'}')"
        )
        db.engine.execute(query)
