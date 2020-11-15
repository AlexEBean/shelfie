INSERT INTO inventory
(image_url, name, price)
VALUES
($1, $2, $3)
RETURNING *;