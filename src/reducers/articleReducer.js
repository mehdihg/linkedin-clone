const INITIAL_STATE={
    articles:[],
    loading:false
}
const articleReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'GET_ARTICLES':
            return{
                ...state,
                articles:action.payload
            }
        case 'LOADING_STATUS':
            return{
                ...state,
                loading:action.payload
            }
            default:
                return state
    }
}
export default articleReducer;