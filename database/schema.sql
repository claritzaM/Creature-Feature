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
    password varchar
    (255) NOT NULL, 
	PRIMARY KEY
    (id)
);

    CREATE TABLE creatures
    (
        id INT NOT NULL
        AUTO_INCREMENT,
	 creatureImage varchar
        (255) NOT NULL,
     creatureName varchar
        (255) NOT NULL,
     creatureSpecies varchar
        (255) NOT NULL,
    speciesDescription varchar
        (255) NOT NULL,
    worldID INT NOT NULL, 
    creatureDescription varchar
        (255) NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
        PRIMARY KEY
        (id)
    );

        CREATE TABLE worlds
        (
            id INT NOT NULL
            AUTO_INCREMENT,
            worldImage varchar
            (255) NOT NULL,
            name varchar
            (255) NOT NULL,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user_id INT NOT NULL,
            PRIMARY KEY
            (id)
        );

            INSERT INTO users
                (lastName, firstName, userName, email)
            VALUES
                ("User", "Test", "testuser123", "test@yahoo.com");

            INSERT INTO worlds
                (name, user_id)
            VALUES
                ("Pandora", 1),
                ("Arendalle", 1);

            INSERT INTO creatures
                (creatureName, creatureSpecies, speciesDescription, worldID, creatureDescription, user_id)
            VALUES
                ("Ikran", "Banshee", "Large bird-like ariel predator native to Pandora.", 1, "Creatures used by the Na'vi for hunting from the air and traveling larger distances.", 1),
                ("Olaf", "Snowman", "European style kingdom run by an ice princess and her goofy pals. ", 2, "Mystical creature who enjoys warm hugs. Created by magical snow.", 1); 
            