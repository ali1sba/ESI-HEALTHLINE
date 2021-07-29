import Api from '@/services/api'

// the post methode of admin

export default {
    validateUser (credantials){
        return Api().post('/admin/validateUser',credantials)
    },
    deleteUser (credantials){
        return Api().post('/admin/deleteUser',credantials)
    },
    desactivateUser (credantials){
        return Api().post('/admin/desactivateUser',credantials)
    }, 
}