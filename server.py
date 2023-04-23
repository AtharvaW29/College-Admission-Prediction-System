from flask import Flask, request, jsonify, make_response
import numpy as np
import json
import sys
from model_generator import get_predictions

flask_app = Flask(__name__)

# # loading the save model
# classifier = joblib.load('classifier.joblib')

# route to get the predictions
@flask_app.route("/",methods=["POST"])
def show():
    # retreiving information provided by the user
    formData = request.data.decode("utf-8")

    # converting it in json format
    data = json.loads(formData)

    # sending the parameters from data for predictions
    result = get_predictions(data['custom_input'])

    # returning the result of the prediction
    return result

if __name__ == '__main__':
    flask_app.run(debug=True)
