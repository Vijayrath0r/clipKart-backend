import { addVendorSchema, loginVendorSchema } from "../models/vendors.js";
const vendorRoutes = (fastify, option, done) => {
    fastify.post('/login', loginVendorSchema)
    fastify.post('/create', addVendorSchema)
    done();
}
export default vendorRoutes;

