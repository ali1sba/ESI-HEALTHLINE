import axios from 'axios'

// the url to the root in the express server

export default () => {
    return axios.create ({
        baseURL : 'http://192.168.1.2:8083'
    })
}
