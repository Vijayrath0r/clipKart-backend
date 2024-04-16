import { productByVendorSchema ,productPriceAndStockSchema} from "../models/products.js";
const productRoutes = (fastify, option, done) => {
    fastify.post('/stockList', productByVendorSchema)
    fastify.post('/productPriceAndStock', productPriceAndStockSchema)
    done();
}
export default productRoutes;

