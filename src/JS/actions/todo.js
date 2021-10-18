// (type,payload)

import { ADD_TASK,DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../constants/Canstants"
// add task 
export const addAddTask=(newtask)=>{
    return {type:ADD_TASK,payload:newtask}
}
// delete task 
export const deleteTask =(id)=> {
    return {type:DELETE_TASK ,payload:id}
}
//edite task 
export const editTask=(id,newTask)=> { 
    return { type:EDIT_TASK , payload:(id,changedTask)}
}
// statusTask 
export const statusTast =(id)=> { 
    return {type:STATUS_TASK,payload:id}
};