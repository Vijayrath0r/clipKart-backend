
CREATE TABLE IF NOT EXISTS "${schemaName}".orders (
    id SERIAL PRIMARY KEY,
    userId INTEGER NOT NULL,
    productId INTEGER NOT NULL,
    orderStatus VARCHAR(255) NOT NULL
);
