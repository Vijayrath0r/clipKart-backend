import { getAllProducts, getProductDetails, getProductsOfVendor, getproductPriceAndStock } from "../controllers/products.js";

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
const getAllProductsSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        category: {
          type: "string"
        },
        limit: {
          type: "number"
        }
      },
      required: ["category", "limit"],
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
      500: {
        properties: {
          status: { type: "number" },
          message: {
            type: "string",
          }
        },
        required: ["status", "message"],
      },
    },
  },
  handler: getAllProducts,
};
const productDetailSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        productId: {
          type: "string"
        }
      },
      required: ["productId"],
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
  handler: getProductDetails,
};
export { productByVendorSchema, productPriceAndStockSchema, getAllProductsSchema, productDetailSchema };
