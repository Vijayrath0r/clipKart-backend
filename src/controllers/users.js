import db from "../db/db.js";

const createSchema = async (schemaName) => {
    try {
        // Check if the schema already exists
        const schemaExists = await db.oneOrNone(
            `SELECT EXISTS (
                SELECT 1
                FROM information_schema.schemata
                WHERE schema_name = $1
            ) AS "exists"`,
            [schemaName]
        );

        // If schema doesn't exist, create it
        if (!schemaExists.exists) {
            await db.none(`CREATE SCHEMA "${schemaName}"`);
            console.log(`Schema "${schemaName}" created successfully.`);
        } else {
            console.log(`Schema "${schemaName}" already exists.`);
        }
    } catch (error) {
        console.error('Error creating schema:', error.message);
    }
}
const createUser = async (req, res) => {
    const postData = req.body;
    try {
        await db.none(`
        INSERT INTO public.users("firstname", "lastname", "orgname", "email", "password", "city", "state", "code")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [
                postData.firstName,
                postData.lastName,
                postData.orgName,
                postData.userEmail,
                postData.password,
                postData.userCity,
                postData.userState,
                postData.zipCode
            ]);
        await createSchema(postData.orgName);
        db.createOrdersTable(postData.orgName);
        return {
            message: "Success",
            postData
        }
    } catch (error) {
        return {
            message: "Something went wrong",
            postData: {}
        }
    }
}
export {
    createUser
};