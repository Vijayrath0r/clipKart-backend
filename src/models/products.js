import { getProductsOfVendor } from "../controllers/products.js";

const productByVendorSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        tenant: {
          type: "string"
        }
      },
      required: ["tenant"],
    },
    response: {
      200: {
        properties: {
          status: { type: "number" },
          message: {
            type: "string",
          },
          productList: {},
        },
        required: ["status", "message", "productList"],
      },
    },
  },
  handler: getProductsOfVendor,
};
export { productByVendorSchema };
