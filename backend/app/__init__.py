# Application entry point
from re import L
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from app.data.database import configure_database, populate_database

# Globally accessible libraries
db = SQLAlchemy() 
ma = Marshmallow()

# Application Factory App
def create_app() -> Flask:
    """Create an app by initializing components"""
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)
    ma.init_app(app)
    CORS(app) # This will enable CORS for all routes

    with app.app_context():
        configure_database(app, db)
        populate_database(db)

        # Include our Routes in our context
        from app.routes import lead, fake_lead

        # Register Blueprints
        app.register_blueprint(lead)
        app.register_blueprint(fake_lead)
        return app
