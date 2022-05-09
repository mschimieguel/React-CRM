"""Compile of useful fuctions to manage database"""

import json
import os

def configure_database(app, db):
    """Manages database connection inside a context."""

    @app.before_first_request
    def initialize_database():
        """Create sql tables for our data models."""
        db.create_all()  

    @app.teardown_request
    def shutdown_session(exception=None):
        """Remove on close connection."""
        db.session.remove()

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

    '''
    Best format that is alligned with SQLAlchemy,
    if circular import is treated in the future:

        new_lead = app.models.LeadModel(
            nome=lead_data['nome'],
            email=lead_data['email'],
            telefone=lead_data['telefone'],
            tipo=lead_data['tipo'],
            etapa=lead_data['etapa'],
            data=lead_data['data'],
            expectativa=lead_data['expectativa']
        )
        leads_objects.append(new_lead)
    db.session.add_all(leads_objects)
    db.session.commit()
    '''
