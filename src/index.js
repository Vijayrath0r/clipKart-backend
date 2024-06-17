import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import userRoutes from "./routes/users.js";
import vendorRoutes from "./routes/vendors.js";
import productRoutes from "./routes/products.js";
import adderessRoutes from "./routes/addresses.js";

const fastify = Fastify({
    logger: true
});
fastify.register(fastifyCors, {
    origin: ["http://localhost:5173"],
});

fastify.register(userRoutes, { prefix: '/user' });
fastify.register(vendorRoutes, { prefix: '/vendor' });
fastify.register(productRoutes, { prefix: '/product' });
fastify.register(adderessRoutes, { prefix: '/adderess' });

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