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
    recoverOrdonnances (credantials){
        return Api().post('/DOCdashboard/recoverOrdonnances',credantials)
    },
    saveOrdonnance (credantials){
        return Api().post('/DOCdashboard/saveOrdonnance',credantials)
    },
    showOrdonnance (credantials){
        return Api().post('/DOCdashboard/showOrdonnance',credantials)
    },
    // ********************* Bilans paraclinique **************************
    // BB: Bilans Biologiques
    showBB (credantials){
        return Api().post('/DOCdashboard/showBB',credantials)
    },

    showBilanBiologique (credantials){
        return Api().post('/DOCdashboard/showBilanBiologique',credantials)
    },

    createBilanBiologique (credantials){
        return Api().post('/DOCdashboard/createBilanBiologique',credantials)
    },

    // BE: Bilans Electriques
    showBE (credantials){
        return Api().post('/DOCdashboard/showBE',credantials)
    },

    showBilanElectrique (credantials){
        return Api().post('/DOCdashboard/showBilanElectrique',credantials)
    },

    downloadBeFile (credantials){
        return Api().post('/DOCdashboard/downloadBeFile',credantials)
    },

    createBilanElectrique (credantials){
        return Api().post('/DOCdashboard/createBilanElectrique',credantials)
    },
}