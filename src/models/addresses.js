import { getDefaultaddress } from "../controllers/addresses.js";

const getDefaultSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        userId: { type: "number" },
      },
      required: ["userId"],
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
  handler: getDefaultaddress,
};
export { getDefaultSchema };
