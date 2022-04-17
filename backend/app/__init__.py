# Application entry point
import os
from flask import Flask
from app.routes.lead import lead


def create_app() -> Flask:
    """Create an app by initializing components"""
    app = Flask(__name__)
    app.register_blueprint(lead)
    return app
