import * as S from './styles'

type PageContainerProps = {
    children: React.ReactNode
}

function PageContainer({ children }: PageContainerProps) {
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    {children}
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default PageContainer