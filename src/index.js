import Fastify from "fastify";
import userRoutes from "./routes/users.js";
import fastifyCors from "@fastify/cors";

const fastify = Fastify({
    logger: true
});
fastify.register(fastifyCors, {
    origin: ["http://localhost:5173"],
});

fastify.register(userRoutes, { prefix: '/user' });

fastify.get('/', (req, reply) => {
    return {
        message: "Welcome to fastify APIs."
    }
})

try {
    fastify.listen({ port: 3002 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}