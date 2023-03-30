import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export function withAuth(gssp: GetServerSideProps) {
    return async (ctx: GetServerSidePropsContext) => {
        const cookies = nookies.get(ctx)

        if (!cookies.pwm_token_openai) {
            return {
                redirect: {
                    permanent: false,
                    destination: `/auth?cbpage=${ctx.resolvedUrl}`
                }
            }
        }

        return await gssp(ctx);
    }
}