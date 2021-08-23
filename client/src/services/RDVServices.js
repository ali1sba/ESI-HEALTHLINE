import Api from '@/services/api'

// the post methode of login

export default {
    progRDVPatient (credantials){
        return Api().post('/progRDVPatient',credantials)
    },
    showRDVSelectedPatient (credantials){
        return Api().post('/showRDVSelectedPatient',credantials)
    },
    annulerRDV (credantials){
        return Api().post('/annulerRDV',credantials)
    },
    saveChangRDVPatient (credantials){
        return Api().post('/saveChangRDVPatient',credantials)
    },
    showRDVDashboard (credantials){
        return Api().post('/showRDVDashboard',credantials)
    },
    
}