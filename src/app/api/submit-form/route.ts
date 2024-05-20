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

export async function GET() {
  const params = {
    TableName: 'MinhaTabelaDynamoDB2'
  };
  return await (db.scan(params).promise()).catch((err: any) => {
    console.error(err);
    return NextResponse.json([]);
  }).then((data:any) => {
    return NextResponse.json(data.Items);
  });
}