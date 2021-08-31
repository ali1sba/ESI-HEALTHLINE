import Api from '@/services/api'

// the post methode of login

export default {
    login (credantials){
        return Api().post('/',credantials)
    },

    loginMobile (credantials){
        return Api().post('/loginMobile',credantials)
    },

    register (credantials){
        return Api().post('/register',credantials)
    },

    forgotpw (credantials){
        return Api().post('/forgotpw',credantials)
    },

    resetpw (credantials){
        return Api().post('/resetpw',credantials)
    },

    resetpwToken (credantials){
        return Api().post('/resetpw/:token',credantials)
    }
}