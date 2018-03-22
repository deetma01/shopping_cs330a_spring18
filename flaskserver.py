from flask import Flask, request, jsonify, Response
import json

app = Flask(__name__)

@app.route('/savelist', methods=['GET', 'POST'])
def save():
	list = request.json


@app.route('/getlist')
def get():



app.run(debug=True, port=5001)
