import {match as matchLocale} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import {NextResponse} from "next/server"

let defaultLocale = 'en-US';
let locales = ['en-US', 'ru-RU'];

function getLocale(request) {
  const negotiatorHeaders = {}
  request.headers.forEach((value, key) => negotiatorHeaders[key] = value);

  const languages = new Negotiator({headers: negotiatorHeaders}).languages();

  const locale = matchLocale(languages, locales, defaultLocale)
  return locale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
