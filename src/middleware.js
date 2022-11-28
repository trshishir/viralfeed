import { NextResponse } from 'next/server';

const Middleware = (req) => {
  if (req.nextUrl.search) {
    return NextResponse.redirect('https://www.viraldesifeeds.com/'+req.nextUrl.pathname.replace('/posts/',''));
  }

};

export default Middleware;
