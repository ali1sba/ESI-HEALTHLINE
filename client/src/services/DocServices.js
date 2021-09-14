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
    annulerBiometricInfo (credantials){
        return Api().post('/DOCdashboard/annulerBioInfo',credantials)
    },
    saveAntecedents (credantials){
        return Api().post('/DOCdashboard/saveAntecedents',credantials)
    },
    saveDepiInfo (credantials){
        return Api().post('/DOCdashboard/saveDepiInfo',credantials)
    },
    saveExamenClinique (credantials){
        return Api().post('/DOCdashboard/saveExamenClinique',credantials)
    },
    recoverExamenClinique (credantials){
        return Api().post('/DOCdashboard/recoverExamenClinique',credantials)
    },
    showExamenClinique (credantials){
        return Api().post('/DOCdashboard/showExamenClinique',credantials)
    },
    modifierExamenClinique (credantials){
        return Api().post('/DOCdashboard/modifierExamenClinique',credantials)
    },
    recoverMedicaments (credantials){
        return Api().post('/DOCdashboard/recoverMedicaments',credantials)
    },
    recoverFormes (credantials){
        return Api().post('/DOCdashboard/recoverFormes',credantials)
    },
    recoverDosages (credantials){
        return Api().post('/DOCdashboard/recoverDosages',credantials)
    },
    recoverMarques (credantials){
        return Api().post('/DOCdashboard/recoverMarques',credantials)
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
    // ***************************** RDV Section *******************************************
    recoverDemandesRDV (credantials){
        return Api().get('/DOCdashboard/recoverDemandesRDV',credantials)
    },
    validerRDVdemande (credantials){
        return Api().post('/DOCdashboard/validerRDVdemande',credantials)
    },
    refuserRDVdemande (credantials){
        return Api().post('/DOCdashboard/refuserRDVdemande',credantials)
    },
    recoverDemandesRDVReport (credantials){
        return Api().get('/DOCdashboard/recoverDemandesRDVReport',credantials)
    },
    refuserDemandeReportRDV (credantials){
        return Api().post('/DOCdashboard/refuserDemandeReportRDV',credantials)
    },
    enregistrerDemandeReportRDV (credantials){
        return Api().post('/DOCdashboard/enregistrerDemandeReportRDV',credantials)
    },
    
    NumValider (credantials){
        return Api().post('/DOCdashboard/NumValider',credantials)
    },
    Numreporter (credantials){
        return Api().post('/DOCdashboard/Numreporter',credantials)
    },
    // ***********************************************************************************
    createMedic (credantials){
        return Api().post('/DOCdashboard/createMedic',credantials)
    },
    recoverMedicamentsAjoutés (credantials){
        return Api().post('/DOCdashboard/recoverMedicamentsAjoutes',credantials)
    },
    SupprimerMedic (credantials){
        return Api().post('/DOCdashboard/supprimerMedic',credantials)
    },
    recoverStats (credantials){
        return Api().post('/DOCdashboard/recoverStats',credantials)
    },
    recoverStatsof (credantials){
        return Api().post('/DOCdashboard/recoverStatsof',credantials)
    }
}