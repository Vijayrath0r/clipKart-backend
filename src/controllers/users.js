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
        const email = postData.userEmail.toLowerCase();
        const isUserWithEmail = await db.any("SELECT id, firstname, lastname, email, password, city, state, code FROM public.users where email = $1;", email);
        if (isUserWithEmail.length > 0) {
            return {
                status: 0,
                message: "User Exists with Email",
                postData: {}
            }
        }
        await db.none(`
        INSERT INTO public.users("firstname", "lastname", "email", "password", "city", "state", "code")
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
                postData.firstName,
                postData.lastName,
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

const loginUser = async (req, res) => {
    const postData = req.body;
    try {
        const isUserWithEmail = await db.any("SELECT id, firstname, lastname, email FROM public.users where email = $1;", postData.username.toLowerCase());
        if (isUserWithEmail.length > 0) {
            return {
                status: 1,
                message: "Success",
                data: isUserWithEmail
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
    createUser,
    loginUser
};