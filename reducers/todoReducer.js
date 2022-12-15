const initalState = {
    task: null,
    tasks: [],
    taskSuccess: false,
    taskError: false,
    message: null
}

export default (state = initalState, action) => {
    switch(action.type) {
        case "get_tasks":
            console.log(action.payload)
            return {
                ...state,
                tasks: action.payload,
                taskError: false,
                taskSuccess: true
            }
        case "get_task":
            return {
                ...state,
                task: action.payload,
                taskError: false,
                taskSuccess: true
            }
        case "update_task":
            return {
                ...state,
                taskSuccess: true,
                taskError: false,
                task: action.payload,
                tasks: tasks.map(tas => tas.id == action.payload.id ? action.payload : tas)
            }
        case "add_task":
            return {
                ...state,
                taskSuccess: true,
                taskError: false,
                task: action.payload,
                tasks: [...tasks, action.payload]
            }
        case "delete_task": 
            return {
                ...state,
                taskSuccess: true,
                taskError: false,
                tasks: tasks.filter(tas => tas.id != action.payload)
            }
        case "error_task":
            return {
                ...state,
                taskSuccess: false,
                taskError: true,
                message: action.payload
            }
        default: 
        return state;
    }
}