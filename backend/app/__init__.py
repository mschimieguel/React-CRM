# Application entry point
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

# Globally accessible libraries
db = SQLAlchemy() 
ma = Marshmallow()


def configure_database(app):
    """Manages database connection inside a context"""

    @app.before_first_request
    def initialize_database():
        db.create_all()  # Create sql tables for our data models

    @app.teardown_request
    def shutdown_session(exception=None):
        db.session.remove()


# Application Factory App
def create_app() -> Flask:
    """Create an app by initializing components"""
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)
    ma.init_app(app)
    CORS(app) # This will enable CORS for all routes

    with app.app_context():
        configure_database(app)

        # Include our Routes in our context
        from app.routes import lead, fake_lead

        # Register Blueprints
        app.register_blueprint(lead)
        app.register_blueprint(fake_lead)
        return app
