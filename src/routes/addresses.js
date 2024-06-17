import { getDefaultSchema } from "../models/addresses.js";
const adderessRoutes = (fastify, option, done) => {
    fastify.post('/getDefault', getDefaultSchema)
    done();
}
export default adderessRoutes;

