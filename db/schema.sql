-- Create the burgers_db database --
DROP DATABASE IF EXISTS a03wfrj9m3of1908;

CREATE DATABASE a03wfrj9m3of1908;
USE a03wfrj9m3of1908;

-- Create a burgers table with the required fields --
CREATE TABLE burgers
(
  id int NOT NULL
  AUTO_INCREMENT,
	burger_name varchar
  (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON
  UPDATE CURRENT_TIMESTAMP,
  	dt DATETIME
  DEFAULT CURRENT_TIMESTAMP ON
  UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY
  (id)
);