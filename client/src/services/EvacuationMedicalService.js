import Api from '@/services/api'

// the post methode of login

export default {
    creeEvM (credantials){
        return Api().post('/EvacuationMedical',credantials)
    },
    getAllEvM (credantials){
        return Api().post('/getEvacuationMedical',credantials)
    }
}