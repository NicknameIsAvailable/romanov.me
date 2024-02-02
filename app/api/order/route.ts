import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        if (body.name === "") 
        return NextResponse.json({success: false, message: "Введите имя"}, {status: 400})
        if (body.telegram === "") 
        return NextResponse.json({success: false, message: "Введите ссылку на телеграм или другие контакты"}, {status: 400})
        if (body.content === "") 
        return NextResponse.json({success: false, message: "Расскажите свою идею!"}, {status: 400})

        const res = await prisma.order.create({
            data: body
        })


        const TELEGRAM_URL = process.env.TELEGRAM_URL

        const tgRes = await fetch(`${TELEGRAM_URL}/api/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        const tgData = tgRes.json()

        return NextResponse.json({success: true, message: "Данные отправлены", res, tgData})
    } catch (err) {
        console.log(err)
        return NextResponse.json({success: false, message: "Error getting state", error: err})
    }
}