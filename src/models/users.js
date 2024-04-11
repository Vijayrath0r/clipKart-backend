import { createUser } from "../controllers/users.js";

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
      required: ["firstName", "lastName", "orgName", "userEmail"],
    },
    response: {
      200: {
        properties: {
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
export { addUserSchema };
