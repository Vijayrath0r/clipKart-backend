import { getAllProductsSchema, productByVendorSchema, productDetailSchema, productPriceAndStockSchema } from "../models/products.js";
const productRoutes = (fastify, option, done) => {
    fastify.post('/stockList', productByVendorSchema)
    fastify.post('/productPriceAndStock', productPriceAndStockSchema)
    fastify.post('/getProducts', getAllProductsSchema)
    fastify.post('/getProduct', productDetailSchema)
    done();
}
export default productRoutes;

