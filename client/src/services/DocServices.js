import Api from '@/services/api'

// the post methode of login

export default {
    createMF (credantials){
        return Api().post('/DOCdashboard',credantials)
    }
}