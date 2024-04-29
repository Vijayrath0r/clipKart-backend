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

const getAllProducts = async (req, res) => {
    const category = req.body.category;
    let limit = req.body.limit;

    // Check if limit is -1, if so, set it to null to fetch all records
    if (limit === -1) {
        limit = null;
    }

    try {
        let query = "SELECT p.* FROM public.products AS p";

        // Check if category is provided and not 'all', then add WHERE clause
        if (category && category.toLowerCase() !== 'all') {
            query += " WHERE p.category = $1";
        }

        query += limit ? " LIMIT $2;" : ";";

        const params = category && category.toLowerCase() !== 'all' ? [category] : [];
        if (limit) params.push(limit);

        const productData = await db.any(query, params);

        return {
            status: 200,
            message: "Success",
            productData
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            status: 500,
            message: "Internal Server Error"
        };
    }
}
const getProductDetails = async (req, res) => {
    const productId = req.body.productId;
    const productData = await db.one(
        "select * from products where id = $1",
        [productId]
    );
    return {
        status: 200,
        message: "Success",
        productData
    }
}

export {
    getProductsOfVendor,
    getproductPriceAndStock,
    getAllProducts,
    getProductDetails
};