import { NextResponse } from "next/server";
import courses from './data.json'


export async function GET(request) {
    return NextResponse.json(courses)
}


export async function POST(request) {
    const { title, description, level, link } = await request.json()
    console.log(title, description, level)
    
    return NextResponse.json({message: 'course created'})
}