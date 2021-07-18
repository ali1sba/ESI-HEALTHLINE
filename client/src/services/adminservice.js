import Api from '@/services/api'

// the post methode of admin

export default {
    activer (credantials){
        return Api().post('/admin/activer',credantials)
    },
    delate (credantials){
        return Api().post('/admin/delate',credantials)
    },
    disactiver (credantials){
        return Api().post('/admin/disactiver',credantials)
    },

    
}