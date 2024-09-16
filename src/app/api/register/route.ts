import { connectMongoDB } from "@/lib/mongodb";
import User from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req:Request){
    try{
        await connectMongoDB()

        console.log("몽고디비 연결 성공!!")

        const {name, email, password} = await req.json()

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({ name, email, password: hashedPassword });

        await newUser.save()

        return NextResponse.json({message: "User registered successfully"}, {status:201})
    } catch(err){
        console.log("실패")
        return NextResponse.json({ message: "Error for registering user", err }, { status: 500 });
    }
}