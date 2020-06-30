DROP DATABASE IF EXISTS creatureFeature;

CREATE DATABASE creatureFeature;

USE creatureFeature;

CREATE TABLE users
(
    id INT NOT NULL
    AUTO_INCREMENT,
	lastName varchar
    (255) NOT NULL,
   	firstName varchar
    (255) NOT NULL,
    userName varchar
    (255) NOT NULL, 
    email varchar
    (255) NOT NULL,
	PRIMARY KEY
    (id)
);

    CREATE TABLE creatures
    (
        id INT NOT NULL
        AUTO_INCREMENT,
	 name varchar
        (255) NOT NULL,
     habitat varchar
        (255) NOT NULL,
     description varchar
        (255) NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY
        (id)
    );

        CREATE TABLE worlds
        (
            id INT NOT NULL
            AUTO_INCREMENT,
            name varchar
            (255) NOT NULL,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY
            (id)
        );

            INSERT INTO users
                (lastName, firstName, userName, email)
            VALUES
                ("User", "Test", "testuser123", "test@yahoo.com")