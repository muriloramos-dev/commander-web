// src/middleware.ts (ou na raiz se não usar src/)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = Boolean(request.cookies.get("token")) // ou outro cookie de sessão

  // Protege todas as rotas que começam com /project
  if (request.nextUrl.pathname.startsWith('/project') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/project/:path*'],
}
