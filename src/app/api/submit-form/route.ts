'use server'
import { NextRequest, NextResponse } from "next/server";
import db from "../../../../db";
export async function POST(req: NextRequest) {
  let body = await req.json();
    const params = {
      TableName: 'MinhaTabelaDynamoDB2',
      Item: {
          'UserID': body.UserID,
          'Title': body.Title,
          'Text': body.Text
      }
    };
    
    return await (db.put(params).promise()).catch((err: any) => {
        return NextResponse.json(err);
    }).then((data:any) => {
        
      return NextResponse.json({message: "Post adicionado com sucesso!"});

    });
}