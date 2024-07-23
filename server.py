from flask import Flask, request, jsonify, make_response
import json
from model_generator import get_predictions
from flask_cors import CORS

flask_app = Flask(__name__)

CORS(flask_app, resources={r"/*": {"origins": "*"}})

# # loading the save model
# classifier = joblib.load('classifier.joblib')

@flask_app.after_request
def add_cors_headers(response):
    # response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Origin', 'https://college-admission-front-end.vercel.app')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

# route to get the predictions
@flask_app.route("/predict",methods=["POST", "GET"])
def show():
    # retreiving information provided by the user
    formData = request.data.decode("utf-8")

    # converting it in json format
    data = json.loads(formData)
    # sending the parameters from data for predictions
    result = get_predictions(data)

        # returning the result of the prediction
    return result

@flask_app.route("/hello", methods=["GET"])
def sample():
    hello = "Hello World"

    return hello

if __name__ == '__main__':
    flask_app.run(host='0.0.0.0', port=5000, debug=True)
