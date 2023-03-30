import axios from "axios";
import nookies from 'nookies'

const api = axios.create({
  baseURL: "https://api.openai.com",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${nookies.get(null).parrot_token_openai}`
  },
});

api.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    nookies.destroy(null, 'parrot_token_openai')
    window.location.reload()
  }

  return Promise.reject(error)
})

export default api;
