
const initialState = {
  task: '',
  tasks: [],
};

function tasksReducer(state = initialState,action){
  switch (action.type) {
    case 'ADD_TASK':
      return{
        ...state,
        tasks : state.tasks.concat([action.payload.task])
      };
    case 'INPUT_TASK':
      return{
        ...state,
        task: action.payload.task,
      };
    default:
      return state;
  }
}

export default tasksReducer;
