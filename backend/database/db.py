import sqlite3

conn = sqlite3.connect("users.sqlite")

cursor = conn.cursor()
sql_query = """ CREATE TABLE user (
    id integer PRIMARY KEY,
    username text NOT NULL,
    password text NOT NULL,
    balance float
)"""

cursor.execute(sql_query)