import api from "./api";

type postSendMessageToChatGPTData = {
    prompt: string
}

export async function postSendMessageToChatGPT({ prompt }: postSendMessageToChatGPTData) {
    return await api.post('/v1/engines/text-davinci-003-playground/completions', {
        prompt: prompt,
        temperature: 0.22,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
}