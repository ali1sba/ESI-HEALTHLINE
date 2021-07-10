import axios from 'axios'

// the url to the root in the express server

export default () => {
    return axios.create ({
        baseURL : 'http://localhost:8083'
    })
}