from flask import Flask

app = Flask(__name__)

# Test API route
@app.route("/testing")
def testing():
    return {"testing": ["1", "2", "3"]}

if __name__=="__main__":
    app.run(debug=True)