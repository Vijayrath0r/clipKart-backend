import db from "../db/db.js";


const getDefaultaddress = async (req, res) => {
    const postData = req.body;
    try {
        const defaultAddress = await db.any("SELECT * FROM public.addresses where userId = $1 and isdefault = TRUE;", postData.userId);
        if (defaultAddress.length > 0) {
            return {
                status: 1,
                message: "Success",
                postData: defaultAddress
            }
        }
        return {
            status: 0,
            message: "No Address Found",
            postData: {}
        }
    } catch (error) {
        console.log(error);
        return {
            status: 0,
            message: "Something went wrong",
            postData: {}
        }
    }
}
export {
    getDefaultaddress
};