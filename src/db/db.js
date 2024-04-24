
import fs from "fs";
import { fileURLToPath } from 'url';
import path from 'path';
import pgPromise from 'pg-promise';
const pgp = pgPromise();
const connection = 'postgresql://clipkart_owner:'+'BbxyCpcz49en'+'@ep-billowing-smoke-a10rg1hn.ap-southeast-1.aws.neon.tech/clipkart?sslmode=require';
const db = pgp(connection);
const __filename = fileURLToPath(import.meta.url);


const createOrdersTable = async (schemaName) => {

    const sqlFilePath = path.join(path.dirname(__filename), 'tables/orders.sql');
    const sqlTemplate = fs.readFileSync(sqlFilePath, 'utf8');
    const sqlQuery = sqlTemplate.replace(/\$\{schemaName\}/g, schemaName);

    db.none(sqlQuery);
}
const createStockTable = async (schemaName) => {

    const sqlFilePath = path.join(path.dirname(__filename), 'tables/stock.sql');
    const sqlTemplate = fs.readFileSync(sqlFilePath, 'utf8');
    const sqlQuery = sqlTemplate.replace(/\$\{schemaName\}/g, schemaName);

    db.none(sqlQuery);
}
export default {
    ...db,
    createOrdersTable,
    createStockTable
};