import { productByVendorSchema } from "../models/products.js";
const productRoutes = (fastify, option, done) => {
    fastify.post('/stockList', productByVendorSchema)
    done();
}
export default productRoutes;

