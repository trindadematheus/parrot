export default function (value: string, history: any[], topic: string) {
    return `
        This is a social conversation between two friends in English about ${topic}.
        
        This is history from messages: ${history.reduce((acc, curr) => {return acc += `${curr.author}: ${curr.text}; `}, '')}

        Please respond this last message: "${value}" as if you were a friend;
    `;
}