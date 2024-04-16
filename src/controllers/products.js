import db from "../db/db.js";

const getProductsOfVendor = async (req, res) => {
    const tenantName = req.body.tenant;

    const productList = await db.any(
        "SELECT s.id AS stock_id, s.productId, s.stock as personalStock, p.* FROM $1# .stock AS s JOIN public.products AS p ON s.productId = p.id;",
        [tenantName]
    );
    return {
        status: 200,
        message: "Success",
        productList
    }
}

const getproductPriceAndStock = async (req, res) => {
    const tenantName = req.body.tenant;
    const productId = req.body.productId;
    const productData = await db.one(
        "SELECT s.id AS stock_id, s.productId, s.stock as personalStock, p.* FROM $1# .stock AS s JOIN public.products AS p ON s.productId = p.id where s.productId = $2 limit 1;",
        [tenantName, productId]
    );
    return {
        status: 200,
        message: "Success",
        productData
    }
}
export {
    getProductsOfVendor,
    getproductPriceAndStock
};