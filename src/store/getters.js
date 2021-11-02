import { assertTSAnyKeyword } from "babel-types"

export const getters = {
    getTestById: (state, getters) => (why ,id) => {
        let buf = state.tests.find(tests => tests.id == why)        
    return  buf.asks.find(asks => asks.id == id)
    },
    getFinallyById: (state, getters) => (id) => {
        return state.testFinal.find(testFinal => testFinal.id == id)
    }    
}
