import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-9abf3.cloudfunctions.net/api'
    //'http://localhost:5001/clone-9abf3/us-central1/api' //the API (cloud funtion) URL
})

export default instance;