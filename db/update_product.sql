UPDATE inventory
SET image_url = $2,
    name = $3,
    price = $4
WHERE product_id = $1;

SELECT * FROM inventory;