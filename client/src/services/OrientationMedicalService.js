import Api from '@/services/api'

// the post methode of login

export default {
    creeOM (credantials){
        return Api().post('/OrientationMedical',credantials)
    },
    getAllOM (credantials){
        return Api().post('/getOrientationMedical',credantials)
    }
}