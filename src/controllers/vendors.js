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
const createVendor = async (req, res) => {
    const postData = req.body;
    console.log(postData);
    try {
        const email = postData.userEmail.toLowerCase();
        const isVendorWithEmail = await db.any("SELECT id FROM public.vendors where email = $1;", email);
        if (isVendorWithEmail.length > 0) {
            return {
                status: 0,
                message: "Saller Exists with Email",
                postData: {}
            }
        }
        await db.none(`
        INSERT INTO public.vendors("firstname", "lastname", "orgname", "tenant", "email", "password", "city", "state", "code")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
                postData.firstName,
                postData.lastName,
                postData.userOrg,
                postData.userOrg,
                email,
                postData.password,
                postData.userCity,
                postData.userState,
                postData.zipCode
            ]);
        return {
            status: 1,
            message: "Success",
            postData
        }
    } catch (error) {
        return {
            status: 0,
            message: "Something went wrong",
            postData: {}
        }
    }
}

const loginVendor = async (req, res) => {
    const postData = req.body;
    try {
        const isVendorWithEmail = await db.any("SELECT id, firstname, lastname, email,orgname FROM public.vendors where email = $1;", postData.username.toLowerCase());
        if (isVendorWithEmail.length > 0) {
            return {
                status: 1,
                message: "Success",
                data: isVendorWithEmail
            }
        }
        return {
            status: 0,
            message: "Invalid Username or password",
            data: {}
        }
    } catch (error) {
        return {
            status: 0,
            message: "Something went wrong",
            data: {}
        }
    }
}
export {
    createVendor,
    loginVendor
};