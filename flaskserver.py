from flask import Flask, request, jsonify, Response
import json

app = Flask(__name__)

@app.route('/savelist', methods = ["POST"]) 
def save():
    list_ = request.json
    listfile = open("list.txt", "w")
    listfile.write(json.dumps(list_))
    res = Response('')
    return res

@app.route('/getlist')
def get():
    listfile = open("list.txt", "r")
    list_ = listfile.read()
    res = Response(json.dumps(list_))
    res.headers = {'Content-Type':'application/json'}
    return res

if __name__ == '__main__':
	app.run(debug=True, port=5001)