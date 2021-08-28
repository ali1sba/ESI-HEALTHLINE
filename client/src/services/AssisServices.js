import Api from '@/services/api'

// the post methode of login

export default {
    recoverRDVI (credantials){
        return Api().post('/Assistant/recoverRDVI',credantials)
    },
    recoverPatients (credantials){
        return Api().post('/Assistant/recoverPatients',credantials)
    },
    progRDVIndividuel (credantials){
        return Api().post('/Assistant/progRDVIndividuel',credantials)
    },
    annulerRDVIndiv (credantials){
        return Api().post('/Assistant/annulerRDVIndiv',credantials)
    },
    confirmModifRDVIndividuel (credantials){
        return Api().post('/Assistant/confirmModifRDVIndividuel',credantials)
    }
}