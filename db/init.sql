CREATE TABLE inventory (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INT,
    image_url TEXT
);