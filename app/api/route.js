import { NextResponse } from "next/server";

const courses = [
    {
        "id": 1,
        "title": "React Front To Back",
        "description": "Learn Modern React, Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects.",
        "link": "https://www.traversymedia.com/Modern-React-Front-To-Back-Course",
        "level": "Beginner"
      },
      {
        "id": 2,
        "title": "Node.js API Masterclass",
        "description": "Build an extensive RESTful API using Node.js, Express, and MongoDB",
        "link": "https://www.traversymedia.com/node-js-api-masterclass",
        "level": "Intermediate"
      }
]


export async function GET(request) {
    return NextResponse.json(courses)
}