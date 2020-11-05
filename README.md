# notable-0.1

DATA BASE SETUP:
view the notable-sql.sql file and edit it to create the database in whatever database client you're using.
Once the database has been created,

Go to notable-be/src/connection.js
replace line 5-8 with your comp information.

make sure to run npm install after pulling from Git!


 /login endpoint
REQUEST BODY EXAMPLE:
{
    "username" : "hiya",
    "password" : "woah"
}

REQUEST RESPONSE EXAMPLE:
{
    "notes": [
        {
            "dataid": 11,
            "user": 1,
            "date": null,
            "name": "day one of the rest of my life"
        },
        {
            "dataid": 12,
            "user": 1,
            "date": null,
            "name": "day two of the rest of my life"
        }
    ],
    "userid": 1,
    "firstname": hiya,
    "lastname": guha
}


