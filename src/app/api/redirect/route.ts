import { type NextRequest, NextResponse } from "next/server";

const allowedUrlBases = ["https://github.com/danielgiljam/slides"];
const allowedReferrers = new Set(["meetabit"]);

export const GET = (request: NextRequest) => {
  const to = request.nextUrl.searchParams.get("to");
  const referrer = request.nextUrl.searchParams.get("referrer");
  return allowedUrlBases.some((urlBase) => to?.startsWith(urlBase)) &&
    allowedReferrers.has(referrer as never)
    ? NextResponse.redirect(to!)
    : new NextResponse(undefined, { status: 400 });
};
