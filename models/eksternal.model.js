const { dbApi } = require("../config/dbConnection.config");
const { QueryTypes } = require('sequelize');
const model = {};

model.findUserbyemail = async function (user) {
    try {
        let sql = await dbApi.query(
        'SELECT * FROM MS_USERS WHERE USERNAME = :user',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {user},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = model;