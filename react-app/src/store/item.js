const ADD_ITEM = 'items/ADD_ITEM'
const GET_ITEM = 'items/GET_ITEM'

const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})
const getItem = (item) => ({
    type: GET_ITEM,
    payload: item
})

export const createItem = (listId, content) => async (dispatch) => {
    let formData = new FormData()

    formData.append("listId", listId)
    formData.append("content", content)
    const res = await fetch("/api/items/", {
        method: "POST",
        body: formData
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(addItem(data));
        return {data: data}
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors){
            return data.errors
        }
    } else {
        return ["An error occurred. Please try again"]
    }

}


export const getAllItems = () => async (dispatch) => {
    const res = await fetch("/api/items/");

    if (res.ok) {
        const data = await res.json();
        dispatch(getItem(data));
    }
}

const initialState = {
    item: {}
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_ITEM:
            return action.payload
        case ADD_ITEM:
            return [state] // this wrong, we need to incorporate the new page into the current state
        default:
            return state
    }
}
