import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export function withAuth(gssp: GetServerSideProps) {
    return async (ctx: GetServerSidePropsContext) => {
        const cookies = nookies.get(ctx)

        if (!cookies.parrot_token_openai) {
            return {
                redirect: {
                    permanent: false,
                    destination: `/auth`
                }
            }
        }

        return await gssp(ctx);
    }
}