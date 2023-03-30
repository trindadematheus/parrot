import { FormEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import nookies from 'nookies'

import DotLoading from '../../components/feedback/DotLoading'
import Button from '../../components/inputs/Button'
import TextInput from '../../components/inputs/TextInput'
import PageContainer from '../../components/layout/PageContainer'
import PageHeader from '../../components/layout/PageHeader'
import * as S from './styles'
import { toast } from 'react-hot-toast'

function AuthPage() {
    const router = useRouter()
    const inputTokenRef = useRef<HTMLInputElement>(null)
    
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (router.query.invalid === 'true') {
            toast.error('invalid Open AI Token')
        }
    }, [router.query])

    async function handleAuth(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const inputValue = inputTokenRef.current.value

        if (inputValue) {
            setIsLoading(true)

            nookies.set(null, 'parrot_token_openai', inputValue, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            router.push('/')
        }
    }

    return (
        <>
            <PageContainer>
                <PageHeader
                    title='OpenAI API Token'
                    description='To use this app, enter your token below.'
                />

                <S.FormGroup onSubmit={handleAuth} >
                    <TextInput ref={inputTokenRef} placeholder='Paste your token' />
                    <Button disabled={isLoading} type='submit' className="btn-submit">
                        {isLoading ? <DotLoading /> : 'CONTINUE'}
                    </Button>
                </S.FormGroup>

                <p style={{ color: '#eee' }} >Don't have a token? Get here:</p>
                <a style={{ color: '#d1fe497e', textDecoration: 'underline' }} href="https://platform.openai.com/account/api-keys" target="_blank" >https://platform.openai.com/account/api-keys</a>
            </PageContainer>
        </>
    )
}

export default AuthPage