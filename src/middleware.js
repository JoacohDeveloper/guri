import middleware from "next-auth/middleware"
import { redirect } from "next/dist/server/api-utils"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*", "/account", "/account/config", "/account/logout"] }