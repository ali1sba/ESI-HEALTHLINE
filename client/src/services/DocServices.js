import Api from '@/services/api'

// the post methode of login

export default {
    createMF (credantials){
        return Api().post('/DOCdashboard',credantials)
    },

    showPatient (credantials){
        return Api().post('/DOCdashboard/showPatient',credantials)
    },

    savePersInfo (credantials){
        return Api().post('/DOCdashboard/savePersInfo',credantials)
    },
    saveBiometricInfo (credantials){
        return Api().post('/DOCdashboard/saveBioInfo',credantials)
    },
    saveAntInfo (credantials){
        return Api().post('/DOCdashboard/saveAntInfo',credantials)
    },
    saveDepiInfo (credantials){
        return Api().post('/DOCdashboard/saveDepiInfo',credantials)
    },
    recoverMedicaments (credantials){
        return Api().post('/DOCdashboard/recoverMedicaments',credantials)
    },
    createOrdonnance (credantials){
        return Api().post('/DOCdashboard/createOrdonnance',credantials)
    },
    addpresc (credantials){
        return Api().post('/DOCdashboard/addpresc',credantials)
    },
}