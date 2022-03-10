const state={
    todo: [
        {
            id: 1,
            title:"salam"
    }
]
}
const getters = {
    todo: (state) => {
        return state.todo
  }
}
const mutations = {
    setTodo: (state,todo) => {
        state.todo=todo
    }
}
const actions = {
    getTodo: ({ commit }) => {
        commit('setTodo')
    }
}
export default {
    state,getters,mutations,actions
}