import Api from '@/services/api'

// the post methode of login

export default {
    creeRM (credantials){
        return Api().post('/RapportMedical',credantials)
    }
}