CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name varchar(50),
    password varchar(100)
 ); 

INSERT INTO users (name, password) VALUES ('Ro', 'hi')

CREATE TABLE channel_type (
    id SERIAL PRIMARY KEY,
    name varchar(50)
); 

INSERT INTO channel_type (name) VALUES ('public');
INSERT INTO channel_type (name) VALUES ('private');

CREATE TABLE channel (
    id SERIAL PRIMARY KEY,
    channel_type_id BIGINT REFERENCES channel_type (id)
); 

INSERT INTO channel (channel_type_id) VALUES (2);

CREATE TABLE channel_users (
    id SERIAL PRIMARY KEY,
    channel_id BIGINT REFERENCES channel (id),
    users_id BIGINT REFERENCES users (id),
    date DATE NOT NULL
); 

INSERT INTO channel_users (channel_id, users_id, date ) VALUES (1, 1, '2021-10-14');

 CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    channel_id BIGINT REFERENCES channel (id),
    users_id BIGINT REFERENCES users (id),
    message varchar(100),
    date DATE NOT NULL
 ); 