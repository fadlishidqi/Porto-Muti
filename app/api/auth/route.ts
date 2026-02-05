import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Cek apakah password sesuai dengan yang di .env
  if (body.password === process.env.ADMIN_PASSWORD) {
    // Set cookie sederhana bernama 'auth'
    (await cookies()).set('auth', 'true', { httpOnly: true, path: '/' });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}