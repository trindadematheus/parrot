import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonProps = {
    children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: ButtonProps) {
    return (
        <>
            <S.Container {...props} >
                {children}
            </S.Container>
        </>
    )
}

export default Button