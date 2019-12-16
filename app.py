#!/usr/bin/env python

import os
from flask import Flask, render_template
app = Flask(__name__)
from flask.ext.jsonpify import jsonify

@app.route("/")
def index():

    return render_template('index.html')

@app.route("/apiMachineLearning")
def apiMachineLearning():

    return jsonify({'Polls': [poll.to_json()]}) if poll else jsonify({'message': 'poll not found'})

if __name__ == "__main__":
    app.run(host='127.0.1', port=os.environ.get('PORT', 3000), debug=True)