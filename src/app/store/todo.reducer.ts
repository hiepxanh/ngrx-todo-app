export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR"

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const TOGGLE_TODO = "TOGGLE_TODO";

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

export function addTodo(title) {
    return {
        type: ADD_TODO,
        payload: {
            title
        }
    }
}

export function toggleTodo( todo ) {
  return {
    type: TOGGLE_TODO,
    payload: todo
  }
}
export function getTodos() {
    return {type:GET_TODOS}
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: filter
    }
}

const initialState = {
    data: [],
    pending: false,
    error: null
}

export function todos(state = initialState, {type,payload}) {
    switch(type) {
        case GET_TODOS:
            return {...state,pending:true, error:null,data:[]}
        case GET_TODOS_SUCCESS:
            return {...state,pending:false,data:[...state.data,...payload]}
        case GET_TODOS_ERROR: 
            return {...state,pending:false,error:'error when get todos'}
        case ADD_TODO:
            return {...state,pending:true,error:null}     
        case ADD_TODO_SUCCESS:
            return {...state,pending:false,error:null,data:[...state.data, payload]} 
        case ADD_TODO_ERROR:
            return {...state,pending:false,error:'error when add todo'} 
        case TOGGLE_TODO:
            return { ...state, data:state.data.map(todo => {
                if (todo.id == payload.id) 
                    return {...todo,completed: !todo.completed}
                return todo
            })}
        default:
            return state;
    }
}


export function visibilityFilter (state="SHOW_ALL", action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload;
        default:
            return state;
    }
}