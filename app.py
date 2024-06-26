from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/users", methods=['GET'])
def getUsers():
    return jsonify (
        {'name': 'alice','email': 'alice@outlook.com'}
    )

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)