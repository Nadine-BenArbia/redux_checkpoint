import { ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../constants/Canstants";

//initial state
const initialState={
    tasks: [{id:Math.random(),test:"",Done:false}],
};

//pure function 
const todoReducer=(state=initialState,action)=>{
     switch (action.type) {
        case ADD_TASK:
            //add new task to the same table
            return{...state,tasks:[...state.tasks,action.payload]};
            
        case DELETE_TASK:
            return {
                ...state,
  tasks: state.tasks.filter((ele) => ele.id !== action.payload),
    };
    case IS_DONE:
        return {
          ...state,
          tasks: state.tasks.map((ele) =>
            ele.id === action.payload ? { ...ele, status: !ele.status } : ele
          ),
        };    
        case EDIT_TASK:

         // same lengh table use map 
         return{...state,tasks:tasks.map(el=>el.id==action.payload.id?{}:el)};
                  
         case STATUS_TASK:
            return{};
                      
                            
        default:
            return state;
    }
};
export default todoReducer ;