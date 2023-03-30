import { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FiMic, FiMicOff, FiPlay, FiSend } from "react-icons/fi";
import { toast } from 'react-hot-toast';

import Button from '../../components/inputs/Button';
import PageContainer from '../../components/layout/PageContainer'
import englishResponsePrompt from '../../prompts/english-response-prompt';
import { postSendMessageToChatGPT } from '../../services/chatgpt';
import * as S from './styles'
import DotLoading from '../../components/feedback/DotLoading';
import Select from '../../components/inputs/Select';

type Message = {
    author: 'me' | 'gpt'
    text: string
}

function ChatPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [voiceText, setVoiceText] = useState('')
    const [chatTopic, setChatTopic] = useState('Sports')

    const endChatRef = useRef(null)

    const {
        transcript,
        listening,
        resetTranscript,
    } = useSpeechRecognition();

    useEffect(() => {
        setVoiceText(transcript)
    }, [transcript])

    useEffect(() => {
        endChatRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    function handleStartStop() {
        if (listening) {
            SpeechRecognition.stopListening()
            handleSendText(transcript)
        } else {
            resetTranscript()
            SpeechRecognition.startListening({ continuous: true, language: 'en-US' })
        }
    }

    async function handleSendText(voicedText: string) {
        setMessages(state => [...state, {
            author: 'me',
            text: voicedText
        }])

        setIsLoading(true)
        resetTranscript()

        try {
            const { data } = await postSendMessageToChatGPT({
                prompt: englishResponsePrompt(voicedText, messages, chatTopic)
            })

            setMessages(state => [...state, {
                author: 'gpt',
                text: data.choices[0].text
            }])
        } catch (error) {
            toast.error('Error sending message, try again.')
        } finally {
            setIsLoading(false)
        }
    }

    function handleCancelListen() {
        SpeechRecognition.stopListening()
        resetTranscript()
        setVoiceText('')
    }

    function handlePlay(text: string) {
        const speechSynthesis = new SpeechSynthesisUtterance();

        speechSynthesis.text = text;
        speechSynthesis.lang = 'en-US';

        window.speechSynthesis.speak(speechSynthesis);
    }

    return (
        <>
            <PageContainer>
                <S.PageLayout>
                    <Select value={chatTopic} onChange={(e) => setChatTopic(e.target.value)} disabled={messages.length > 0} label='Topic of Conversation' >
                        <option value="Sports">Sports</option>
                        <option value="Electronic Games">Electronic Games</option>
                        <option value="Music">Music</option>
                        <option value="Trips">Trips</option>
                        <option value="Technology">Technology</option>
                    </Select>

                    <div className="messages-list">
                        {messages.map((message, key) => (
                            <S.MessageItem key={key} author={message.author} >
                                <div className="message-header">
                                    <p className="message-author">{message.author}</p>

                                    {message.author === 'gpt' && (
                                        <button onClick={() => handlePlay(message.text)} className='play' >
                                            <FiPlay />
                                        </button>
                                    )}
                                </div>

                                <p className="message-text">{message.text}</p>
                            </S.MessageItem>
                        ))}

                        {isLoading && (
                            <S.MessageItem key='loading-message' author={"gpt"} >
                                <div className="message-header">
                                    <p className="message-author">{"gpt"}</p>
                                </div>

                                <p className="message-text">
                                    <DotLoading />
                                </p>
                            </S.MessageItem>
                        )}

                        <div className="end-chat" ref={endChatRef} />
                    </div>

                    <S.FormGroup isListening={listening} >
                        <S.MessageBox>
                            {voiceText}
                        </S.MessageBox>

                        {listening ? (
                            <>
                                <Button type='button' onClick={handleCancelListen} ><FiMicOff size={22} color="#222" /></Button>
                                <Button type='button' onClick={handleStartStop} ><FiSend size={22} color="#222" /></Button>
                            </>
                        ) : (<Button type='button' onClick={handleStartStop} ><FiMic size={22} color="#222" /></Button>)}
                    </S.FormGroup>
                </S.PageLayout>
            </PageContainer>
        </>
    )
}

export default ChatPage