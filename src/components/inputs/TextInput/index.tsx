import { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './styles'

type TextInputProps = {} & InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    return (
        <>
            <S.Container>
                <input {...props} ref={ref} />
            </S.Container>
        </>
    )
})

export default TextInput