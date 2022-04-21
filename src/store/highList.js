

const defaultState = {
    tasks:[]
}


export const ADD_TASK_HIGH = 'ADD_TASK_HIGH';
export const REMOVE_TASK_HIGH ='REMOVE_TASK_HIGH';


export const highListReducer = (state = defaultState, action) => {

    switch(action.type){

        case ADD_TASK_HIGH:
        return{
          ...state, tasks:[...state.tasks, action.payload]
        }
        
        case REMOVE_TASK_HIGH:
          return{
            ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id)
          }

        default : return state;
    }
}

export const addTaskActionHigh = (payload) => ({type: ADD_TASK_HIGH, payload});
export const removeTaskActioHigh = (payload) => ({type: REMOVE_TASK_HIGH, payload});