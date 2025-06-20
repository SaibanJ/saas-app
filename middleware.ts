import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Run for all routes including companions
    '/companions/:path*',
    '/companion/:path*',
    // Run for my-journey route
    '/my-journey/:path*',
    // Run for sign-in route
    '/sign-in/:path*',
    // Run for subscription route
    '/subscription/:path*',
  ],
};
