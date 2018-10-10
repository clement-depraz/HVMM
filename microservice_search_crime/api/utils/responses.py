#!/usr/bin/python
# -*- coding: utf-8 -*-

from flask import make_response, jsonify

INVALID_FIELD_NAME_SENT_422 = {
    "http_code": 422,
    "code": "invalidField",
    "message": "Not all field names are valid."
}

INVALID_INPUT_422 = {
    "http_code": 422,
    "code": "invalidInput",
    "message": "Invalid input"
}

MISSING_PARAMETERS_422 = {
    "http_code": 422,
    "code": "missingParameter",
    "message": "Missing parameters."
}

BAD_REQUEST_400 = {
    "http_code": 400,
    "code": "badRequest",
    "message": "Bad request"
}

SERVER_ERROR_500 = {
    "http_code": 500,
    "code": "serverError",
    "message": "Server error"
}

SERVER_ERROR_404 = {
    "http_code": 404,
    "code": "notFound",
    "message": "Resource not found"
}

UNAUTHORIZED_403 = {
    "http_code": 403,
    "code": "notAuthorized",
    "message": "You are not allowed to do that."
}

NOT_FOUND_HANDLER_404 = {
    "http_code": 404,
    "code": "notFound",
    "message": "There are no such handler"
}

SUCCESS_200 = {
    'http_code': 200,
    'code': 'success'
}


def response_with(response, value=None, message=None, error=None, headers={}, pagination=None):
    result = {}
    if value is not None:
        result.update(value)

    if response.get('message', None) is not None:
        result.update({'message': response['message']})

    result.update({'code': response['code']})

    if error is not None:
        result.update({'errors': error})

    if pagination is not None:
        result.update({'pagination': pagination})

    headers.update({'Access-Control-Allow-Origin': '*'})
    headers.update({'server': 'Flask Starter API'})

    return make_response(jsonify(result), response['http_code'], headers)


LIMIT = 10

def get_paginated_list(queryset, url, page):
    # check if page exists
    count = len(queryset)
    # make response
    obj = {}
    obj['start'] = page * LIMIT
    obj['limit'] = LIMIT
    obj['nb_result'] = count
    # make URLs
    # make previous url
    if page == 0:
        obj['previous'] = ''
    else:
        obj['previous'] = url + '?page=%d' % (page - 1)
    # make next url
    if ((page+1) * LIMIT) > count:
        obj['next'] = ''
    else:
        obj['next'] = url + '?page=%d' % (page + 1)
    # finally extract result according to bounds
    obj['results'] = queryset[(page * LIMIT):((page + 1) * LIMIT)]
    return obj