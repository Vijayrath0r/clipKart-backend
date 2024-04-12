import { createVendor, loginVendor } from "../controllers/vendors.js";

const addVendorSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        userEmail: { type: "string" },
        userCity: { type: "string" },
        userState: { type: "string" },
        zipCode: { type: "string" },
      },
      required: ["firstName", "lastName", "userEmail"],
    },
    response: {
      200: {
        properties: {
          status: { type: "number" },
          message: {
            type: "string",
          },
          postData: {},
        },
        required: ["message", "postData"],
      },
    },
  },
  handler: createVendor,
};

const loginVendorSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
      },
      required: ["username", "password"],
    },
    response: {
      200: {
        properties: {
          status: { type: "number" },
          message: {
            type: "string",
          },
          data: {},
        },
        required: ["status", "message", "data"],
      },
    },
  },
  handler: loginVendor,
};
export { addVendorSchema, loginVendorSchema };
