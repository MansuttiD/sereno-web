import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  let jwt = request.cookies.get('sereno_success');

  if (!jwt ) {
    return NextResponse.redirect(new URL('/register', request.url));
  }

}

export const config = {
  matcher: '/register/success',
};