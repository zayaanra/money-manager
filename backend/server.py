from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import sqlite3, os

# Create app
app = Flask(__name__)

def db_connection():
    conn = sqlite3.connect("users.sqlite")
    cursor = conn.cursor()
    sql_query = """ CREATE TABLE IF NOT EXISTS user (
        id integer PRIMARY KEY,
        username text NOT NULL,
        password text NOT NULL,
        balance float
    )"""
    cursor.execute(sql_query)
    return conn

# Route to the homepage w/ a GET request
@app.route("/login-<username>-<password>", methods=["POST"])
def login(username, password):
    conn = db_connection()
    cursor = conn.cursor()
    for row in cursor.execute("SELECT username, password FROM user"):
        username, password = row
        break
    else:
        print("ERROR. ACCOUNT NOT FOUND",flush=True)
    # Go to database and try to see if username and pass exists
    # If it exists:
    # Redirect them to a new page
    # else:
    # Tell them to register
    return "<h1> Username: %s </h1>" % username 

# Route to the register page w/ a GET request
@app.route("/register", methods=["POST"])
def register(username, password):
    conn = db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO user (%s, %s)", (username, password))
    # Check if username already exists
    # Insert the username and password into the database if username is unique
    # Else print error message
    return f'Register Here'

# Run the server
if __name__ == "__main__":
    app.run(debug=True)
