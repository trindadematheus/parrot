import { forwardRef, SelectHTMLAttributes } from 'react'

import * as S from './styles'

type SelectProps = {
    label?: string
    children: React.ReactNode
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    return (
        <>
            <S.Container>
                {props.label && <label>{props.label}</label>}

                <select ref={ref} {...props} >
                    {props.children}
                </select>
            </S.Container>
        </>
    )
})

export default Select