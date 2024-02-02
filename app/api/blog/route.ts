import { NextResponse, type NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (id) {
      const data = await prisma.state.findFirst({
        where: {
          id: Number(id)
        }
      });

      return NextResponse.json({
        success: true,
        data,
      });
    } else {
      const data = await prisma.state.findMany();

      return NextResponse.json({
        success: true,
        data,
      });
    }
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Error getting state",
      error: err,
    });
  }
}