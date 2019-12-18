#!/usr/bin/env python

import os
from flask import Flask, render_template
from flask_cors import CORS
from flask import jsonify
from flask import request
import keras
from keras.models import load_model
import numpy as np
import re
from sklearn import svm
import pickle

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)

@app.route("/")
def index():

    return render_template('index.html')
# Falls
nn_falls = load_model('./models/nn_falls.h5')
svm_falls = pickle.load(open('./models/svm_falls.sav', 'rb'))
tree_falls = pickle.load(open('./models/tree_falls.sav', 'rb'))

# Medication
nn_medication = load_model('./models/nn_medication.h5')
svm_medication = pickle.load(open('./models/svm_medication.sav', 'rb'))
tree_medication = pickle.load(open('./models/tree_medication.sav', 'rb'))

@app.route("/predict", methods= ['GET', 'POST'])
def apiMachineLearning():
    if request.method == 'POST':
        learning = request.json['learning']
        variable = request.json['variable']
        age = request.json['age']
        gender = 1 if request.json['gender'] == 'Male' else 0
        activity_count = request.json['activity_count']
        activity_balance = request.json['activity_balance']
        mood = request.json['mood']
        medication = request.json['medication']
        falls = request.json['falls']
        final_val = medication if falls == '' else falls
        prediction = ''

        arr = np.array([[age, gender, activity_count, activity_balance, mood, final_val]])
        if learning == 'Neural Networks':
            print("IN NEURAL NET")
            prediction = nn_falls.predict(arr)[0] * 3 if variable == 'Falls' else nn_medication.predict(arr)[0] * 3
        elif learning == 'SVM':
            prediction = svm_falls.predict(arr) if variable == 'Falls' else svm_medication.predict(arr)
        elif learning == 'Decision Tree':
            prediction = tree_falls.predict(arr) if variable == 'Falls' else tree_medication.predict(arr)
        print("PREDICTION", prediction)

        return jsonify({'prediction': int(prediction[0])})
        
    return jsonify({'data': 'data'})

@app.route("/summary")
def summary():
    d = {
        'hi': 1
    }
    # return jsonify(d)
    return jsonify({'data': 'data'})

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3001), debug=True)