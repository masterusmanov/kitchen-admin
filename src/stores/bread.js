import {ref, computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const breadStore  = defineStore('bread', ()=>{
    
    const state = reactive({
        list: [],
        load: true,
        errorMessage: "",
    })

    const findOne = (id)=>{
        return state.list.filter(el => el.id == id)
    }
    return {state, findOne}
})