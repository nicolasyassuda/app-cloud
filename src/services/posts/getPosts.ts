import db from "../../../db";

export default async function getPosts() {
    const params = {
            TableName: 'MinhaTabelaDynamoDB2'
    };
    return (await db.scan(params).promise()).Items;
}