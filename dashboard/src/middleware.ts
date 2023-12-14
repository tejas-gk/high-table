import { NextRequest, NextResponse } from "next/server";

const OUR_DOMAIN =
    process.env.NODE_ENV === "production" ? "acme.com" : "localhost:3001";

export default (req: NextRequest) => {
    const host = req.headers.get("host");

    if (host.endsWith(`.${OUR_DOMAIN}`)) {
        const subdomain = host.replace(`.${OUR_DOMAIN}`, "");
        const url = req.nextUrl.clone();
        url.pathname = `_tenant/${subdomain}${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
};