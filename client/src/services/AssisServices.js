import Api from '@/services/api'

// the post methode of login

export default {
    // *********************************** RDV GROUP *******************************************
    recoverRDVG (credantials){
        return Api().post('/Assistant/recoverRDVG',credantials)
    },
    progRDVGroup (credantials){
        return Api().post('/Assistant/progRDVGroup',credantials)
    },
    confirmModifRDVGroup (credantials){
        return Api().post('/Assistant/confirmModifRDVGroup',credantials)
    },
    annulerRDVGroup (credantials){
        return Api().post('/Assistant/annulerRDVGroup',credantials)
    },
    // *********************************** RDV INDIV *******************************************
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