from flask import Flask, jsonify, request
from flask_cors import CORS
from mysqlServer import dataBase

app = Flask(__name__)
CORS(app)

cursor = dataBase.cursor()

@app.route("/", methods=["POST"])
def login():
    query = request.get_json()
    sqlQuery = "insert into users (name, password, gmail, dni, age) values (%s,%s,%s,%s,%s)"
    cursor.execute(sqlQuery, tuple(query[i] for i in query))
    dataBase.commit()
    return jsonify({"status" : "200"}),200

app.run(debug=True)