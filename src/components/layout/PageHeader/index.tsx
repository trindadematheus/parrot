import Head from 'next/head'
import * as S from './styles'

type PageHeaderProps = {
    title: string
    description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <>
            <Head>
                <meta property="og:title" content={`${title} | Parrot: Practice your english by talking.`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                <meta name="description" content={description} />

                <title>{title} | Parrot: Practice your english by talking.</title>
            </Head>

            <S.Container>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </S.Container>
        </>
    )
}

export default PageHeader