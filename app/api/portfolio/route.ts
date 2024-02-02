import { NextResponse, type NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id')
    const count = searchParams.get('count')

    const condition: any = {}

    if (id) condition.id = Number(id)
    if (count) condition.take = Number(count)

    if (id) {
      const data = await prisma.project.findFirst(condition)
      return NextResponse.json({success: true, data})
    }
    else {
      const data = await prisma.project.findMany(condition)
      return NextResponse.json({success: true, data})
    }
  }
  catch (err) {
    return NextResponse.json({success: false, message: "Error getting projects", error: err})
  }
}