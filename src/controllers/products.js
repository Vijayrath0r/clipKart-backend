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
export {
    getProductsOfVendor
};