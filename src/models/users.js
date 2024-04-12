import { createUser, loginUser } from "../controllers/users.js";

const addUserSchema = {
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
  handler: createUser,
};

const loginUserSchema = {
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
  handler: loginUser,
};
export { addUserSchema, loginUserSchema };
