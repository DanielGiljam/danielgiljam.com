import { type NextRequest, NextResponse } from "next/server";

const allowedUrlBases = ["https://github.com/danielgiljam/slides"];

export const GET = (request: NextRequest) => {
  const to = request.nextUrl.searchParams.get("to");
  return allowedUrlBases.some((urlBase) => to?.startsWith(urlBase))
    ? NextResponse.redirect(to!)
    : new NextResponse(undefined, { status: 400 });
};
