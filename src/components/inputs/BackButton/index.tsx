import Link from 'next/link'

import * as S from './styles'

type BackButtonProps = {
    href: string
}

function BackButton({ href }: BackButtonProps) {
    return (
        <>
            <Link href={href} >
                <S.Container aria-label='back to main menu' >
                    <img src="/chevron-left.svg" alt="back button icon" />
                </S.Container>
            </Link>
        </>
    )
}

export default BackButton