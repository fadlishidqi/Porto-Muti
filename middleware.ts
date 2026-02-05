import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Jika user mau masuk ke halaman admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Cek apakah punya cookie 'auth'
    const auth = request.cookies.get('auth');
    
    if (!auth) {
      // Jika tidak punya, tendang ke halaman login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}