import Api from '@/services/api'

// the post methode of login

export default {
    login (credantials){
        return Api().post('/register',credantials)
    }
}