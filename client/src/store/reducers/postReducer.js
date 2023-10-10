import actionTypes from "../actions/actionTypes";
const initState = {
    posts: [],
    newPosts: [],
    postOfCurrent: [],
    dataEdit: {},
    msg: '',
    count: 0
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_POSTS_LIMIT:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        case actionTypes.GET_NEW_POST:
            return {
                ...state,
                newPosts: action.newPosts || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_POSTS_ADMIN:
            return {
                ...state,
                postOfCurrent: action.posts || [],
                msg: action.msg || '',
            }
        case actionTypes.EDIT_DATA:
            return {
                ...state,
                dataEdit: action.dataEdit || {},
                msg: action.msg || '',
            }
        default:
            return state;
    }
}

export default postReducer