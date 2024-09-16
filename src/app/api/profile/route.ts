import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import User from "@/model/user";

const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET(req:Request){
    try{
        await connectMongoDB();

        // Authorization 헤더에서 Token 추출
        const authHeader = req.headers.get("Authorization")
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return NextResponse.json({ message: "Authorization token missing or malformed" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1]

        // Token 검증
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        // userId로 사용자 조회
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return NextResponse.json({message: "User is not found"},{status:404})
        }

        return NextResponse.json({user}, {status:200})

    }catch(err){
        console.error("Error for trying to get user profile:", err);
        return NextResponse.json({ message: "Error for trying to get user profile" }, { status: 500 });
    }
}