import { addUserSchema, loginUserSchema } from "../models/users.js";
const userRoutes = (fastify, option, done) => {
    fastify.post('/login', loginUserSchema)
    fastify.post('/create', addUserSchema)
    done();
}
export default userRoutes;

