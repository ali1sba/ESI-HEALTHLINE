import Api from '@/services/api'

// the post methode of login

export default {
    creeCM (credantials){
        return Api().post('/CertificatMedical',credantials)
    },
    getAllCM (credantials){
        return Api().post('/getCertificatMedical',credantials)
    }
}