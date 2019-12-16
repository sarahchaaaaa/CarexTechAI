#!/usr/bin/env python

import os
from flask import Flask, render_template
app = Flask(__name__)
from flask import jsonify
from flask import request
import re

@app.route("/")
def index():

    return render_template('index.html')

@app.route("/apiMachineLearning", methods= ['GET', 'POST'])
def apiMachineLearning():
    if request.method == 'POST':
        poll = 'Hello'
        print(request.json)
        print('hi')
        return jsonify({'Polls': 'Polls'}) if poll else jsonify({'message': 'poll not found'})
    print('hello')
    return jsonify({'data': 'data'})

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3000), debug=True)