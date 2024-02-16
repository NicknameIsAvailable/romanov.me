import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
    },
})

const sendMail = async (data: {name: string, telegram: string, content: string}) => {
    try {
        const { name, telegram, content } = data
        const html = `<html lang="ru"><body><h1>Данные клиента ${name}<h1/>
		<h2>Имя: ${name}</h2>
		<h2>Телега: ${telegram}</h2>
		<h2>Описание</h2>
		<p>${content}</p>
		</body></html>`

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `Данные клиента ${name}`,
            html: html,
        }
        await transporter.sendMail(mailOptions)
    } catch (e) {
        console.log("Error while sending mail: ", e)
    }
}

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

        await sendMail(body)

        return NextResponse.json({
            success: true,
            message: "Данные отправлены",
            res,
        })
    } catch (err) {
        console.log(err)
        return NextResponse.json({success: false, message: "Error getting state", error: err})
    }
}