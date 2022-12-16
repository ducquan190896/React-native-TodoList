export const getTasks = () => async (dispatch, getState) => {
    try {
        const data = await fetch("http://10.0.2.2:5000/todos");
        const datajson = await data.json();
        console.log(datajson)
        dispatch({
            type: "get_tasks",
            payload: datajson
        })

    } catch (err) {
        dispatch({
            type: "error_task",
            payload: err
        })
    }
    console.log("hello")
}

export const getTask = (id) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://10.0.2.2:5000/todos/${id}`)
        const datajson = await data.json();
        dispatch({
            type: "get_task",
            payload: datajson
        })
    } catch (err) {
        dispatch({
            type: "error_task",
            payload: err
        })
    }
}

export const addTask = (task) => async (dispatch, getState) => {
    try {
        const data = await fetch("http://10.0.2.2:5000/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        const datajson = await data.json()
        dispatch({
            type: "add_task",
            payload: datajson
        })
    }catch (err) {
        dispatch({
            type: "error_task",
            payload: err
        })
    }
}

export const updateTaskFunction = (id, task) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://10.0.2.2:5000/todos/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        const datajson = await data.json()
         dispatch({
            type: "update_task",
            payload: datajson
        })
    } catch (err) {
        dispatch({
            type: "error_task",
            payload: err
        })
    }
}

export const openUpdateStatus = (todo) => async (dispatch, getState) => {
    try {
        dispatch({
            type: "open_update_status",
            payload: todo
        })
    } catch (err) {
        dispatch({
            type: "error_task",
            payload: err
        })
    }
}

export const deleteTask = (id) => async (dispatch, getState) => {
    try {
         await fetch(`http://10.0.2.2:5000/todos/${id}`, {
            method: "DELETE"
        })
        dispatch({
            type:"delete_task",
            payload: id
        })
    } catch (err) {
        dispatch({
            type: "error_task",
            payload: err
        })
    }
    console.log(id)
}
