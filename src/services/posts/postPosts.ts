'use server'
import db from "../../../db";

export default async function postPosts(formData: any) {
    console.log(formData);
        const params = {
                TableName: 'PostsTable',
                Item: {
                    'UserID': formData.UserID,
                    'Title': formData.Title,
                    'Text': formData.Text
                }
        };
        return await (db.put(params).promise()).catch((err: any) => {
            console.log(err);
        }).then(() => {
            console.log("Post adicionado com sucesso!")
            return "Post adicionado com sucesso!";
        });
}