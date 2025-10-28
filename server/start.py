from flask import Flask, jsonify, request
from flask_cors import CORS
from mysqlServer import dataBase
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

cursor = dataBase.cursor()

@app.route("/", methods=["POST"])
def login():
    try:
        query = request.get_json()
        sqlQuery = "insert into users (name, password, gmail, age) values (%s,%s,%s,%s)"
        cursor.execute(sqlQuery, tuple(query[i] for i in query))
        dataBase.commit()
        return jsonify({"status" : "200"}),200
    except Error as e:
        return jsonify({"error" : e.args}),500

@app.route("/singin", methods=["POST"])
def singin():
    query = request.get_json()
    components = tuple(query[i] for i in query)
    mysqlRequest = "select  "
    print(components)
    return(jsonify({"object" : components}))

app.run(debug=True)