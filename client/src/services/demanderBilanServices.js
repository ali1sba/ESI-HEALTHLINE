import Api from '@/services/api'

// the post methode of login

export default {
    creeDB (credantials){
        return Api().post('/DemandeBilanl',credantials)
    },
    getAllDemandes (credantials){
        return Api().post('/getDemanderBilan',credantials)
    }
}