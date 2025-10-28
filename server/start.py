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
    try:
        query = request.get_json()
        mysqlRequest = "select password from users where gmail = %s"
        cursor.execute(mysqlRequest, (query["gmail"],))
        if cursor.fetchone()[0] == query["password"]:
            return(jsonify({ "idenfyer" : 1 })),200
        else:
            return(jsonify({ "identifyer" : 0 })),200
    except Error as e:
        return(jsonify({ "error" : "no se pudo encontrar el usuario" })),500

if __name__ == "__main__":
    app.run(debug=True)