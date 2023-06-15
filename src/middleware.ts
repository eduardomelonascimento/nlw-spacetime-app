import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const signinURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signinURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; http-only; max-age=20`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
