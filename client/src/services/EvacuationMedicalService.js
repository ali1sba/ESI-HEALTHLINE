import Api from '@/services/api'

// the post methode of login

export default {
    creeEM (credantials){
        return Api().post('/EvacuationMedical',credantials)
    },
    getAllEM (credantials){
        return Api().post('/getEvacuationMedical',credantials)
    }
}