import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token && !request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/iDonate-admin/dashboard', request.url))
  }

  if (token && request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/iDonate-admin/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

