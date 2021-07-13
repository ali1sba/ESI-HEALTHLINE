import Api from '@/services/api'

// the post methode of login

export default {
    login (credantials){
        return Api().post('/',credantials)
    },

    register (credantials){
        return Api().post('/register',credantials)
    },

    resetpw (credantials){
        return Api().post('/resetpw',credantials)
    }
}