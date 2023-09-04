import axios from "axios";

const user = JSON.parse(window.localStorage.getItem('token'))

axios.defaults.baseURL = process.env.VITE_BASE_API_URL
console.log(axios.defaults.baseURL)

if (user) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
}