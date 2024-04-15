
CREATE TABLE IF NOT EXISTS "${schemaName}".stock (
    id SERIAL PRIMARY KEY,
    productId INTEGER NOT NULL,
    stock INTEGER NOT NULL
);
