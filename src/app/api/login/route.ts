import User from "@/model/user"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(req:Request){
    try{
        await connectMongoDB();
        const {email, password} = await req.json()

        const user = await User.findOne({email})
        if(!user){
            return  NextResponse.json({ message: "User is not found. Please check your email again." }, { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password. Please try again" }, { status: 401 });
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET as string, {expiresIn:'1h'})
        console.log("토큰!!!!!", token)

        return NextResponse.json( {user:{name:user.name,email:user.email }, token}, { status: 200 });
    } catch (err) {
        console.error("Error during login:", err);
        return NextResponse.json({ message: "Error during login", err }, { status: 500 });
    }
}