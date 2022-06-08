import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

type Middleware = (req: NextRequest, ev: NextFetchEvent) => Promise<NextResponse>;

export const middleware: Middleware = async (req, ev) => {

    // const secret = process.env.NEXTAUTH_SECRET;

    // const session = await getToken({ req, secret })

    // console.log({session})
    // if (!session) {
    //     const url = req.nextUrl.clone()
    //     const requestedPage = req.page.name
    //     url.pathname = `/auth/login`
    //     url.search = `?p=${requestedPage}`
    //     return NextResponse.redirect(url)
    // }

    return NextResponse.next()

}