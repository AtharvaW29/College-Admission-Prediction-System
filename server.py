from flask import Flask, request, jsonify, make_response
import numpy as np
import json
import sys
from model_generator import get_predictions
from flask_cors import CORS

flask_app = Flask(__name__)

CORS(flask_app, resources={r"/*": {"origins": "http://localhost:3000"}})

# # loading the save model
# classifier = joblib.load('classifier.joblib')

@flask_app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

# route to get the predictions
@flask_app.route("/",methods=["POST", "GET"])
def show():
    # retreiving information provided by the user
    formData = request.data.decode("utf-8")

    # converting it in json format
    data = json.loads(formData)
    # sending the parameters from data for predictions
    result = get_predictions(data)

        # returning the result of the prediction
    return result
if __name__ == '__main__':
    flask_app.run(debug=True)
