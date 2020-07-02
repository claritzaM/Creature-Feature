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
	 creatureImage varchar
        (255) NOT NULL,
     creatureName varchar
        (255) NOT NULL,
     creatureSpecies varchar
        (255) NOT NULL,
    speciesDescription varchar
        (255) NOT NULL,
    creatureDescription varchar
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
            user_id INT NOT NULL,
            PRIMARY KEY
            (id)
        );





            INSERT INTO creatures
                (creatureImage, creatureName, creatureSpecies, speciesDescription, creatureDescription)
            VALUES
                ("https://pm1.narvii.com/5995/503e75adcfa32f606ab50b3456097255394b3f4d_hq.jpg" , "Ikran", "Banshee", "Large bird-like ariel predator native to Pandora.", "Creatures used by the Na'vi for hunting from the air and traveling larger distances.");
                
            