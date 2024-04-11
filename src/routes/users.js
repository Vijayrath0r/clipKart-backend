import { addUserSchema } from "../models/users.js";
const userRoutes = (fastify, option, done) => {
    fastify.post('/create', addUserSchema)
    done();
}
export default userRoutes;

