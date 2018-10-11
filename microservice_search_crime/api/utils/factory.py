#!/usr/bin/python
# -*- coding: utf-8 -*-

import logging
import sys
from flask import Flask, request
from flask import jsonify
from flask_pymongo import PyMongo
from api.utils.responses import response_with, get_paginated_list
from bson import json_util


def create_app(config):
    app = Flask(__name__)

    app.config.from_object(config)
    mongo = PyMongo(app)

    # START GLOBAL HTTP CONFIGURATIONS
    @app.after_request
    def add_header(response):
        return response

    @app.errorhandler(400)
    def bad_request(e):
        logging.error(e)
        return response_with(resp.BAD_REQUEST_400)

    @app.errorhandler(500)
    def server_error(e):
        logging.error(e)
        return response_with(resp.SERVER_ERROR_500)

    @app.errorhandler(404)
    def not_found(e):
        logging.error(e)
        return response_with(resp.NOT_FOUND_HANDLER_404)

    # END GLOBAL HTTP CONFIGURATIONS
    @app.route('/search', methods=['POST'])
    def search():
        data = json_util.loads(request.data)
        crimes = list(mongo.db.crime_incident_reports.find(data["filters"]))
        return json_util.dumps(get_paginated_list(
            crimes,
            '/search', 
            page=int(data["page"])
        ))

    logging.basicConfig(stream=sys.stdout,
                        format='%(asctime)s|%(levelname)s|%(filename)s:%(lineno)s|%(message)s',
                        level=logging.DEBUG)
    return app
