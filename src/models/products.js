import { getProductsOfVendor, getproductPriceAndStock } from "../controllers/products.js";

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
const productPriceAndStockSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        tenant: {
          type: "string"
        },
        productId: {
          type: "string"
        }
      },
      required: ["tenant", "productId"],
    },
    response: {
      200: {
        properties: {
          status: { type: "number" },
          message: {
            type: "string",
          },
          productData: {},
        },
        required: ["status", "message", "productData"],
      },
    },
  },
  handler: getproductPriceAndStock,
};
export { productByVendorSchema, productPriceAndStockSchema };
