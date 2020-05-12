var mysql = require("mysql");

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "esza498rlvf9btof",
    password: "b2jlp7f6azd8zl7f",
    database: "a03wfrj9m3of1908",
  });
}

// Make the connection to MySQL
connection.connect(function (err) {
  if (err) {
    console.error("ERROR: MySQL connection error -- " + err.stack + "\n\n");
    return;
  }
  console.log(
    "Connected to MySQL database as id " + connection.threadId + "\n\n"
  );
});

// Export connection for ORM use
module.exports = connection;
