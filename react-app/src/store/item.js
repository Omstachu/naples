const ADD_ITEM = 'items/ADD_ITEM'
const GET_ITEM = 'items/GET_ITEM'
const EDIT_ITEM = 'items/GET_ITEM'
const DELETE_ITEM = 'items/DELETE_ITEM'

const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})
const getItem = (item) => ({
    type: GET_ITEM,
    payload: item
})
const deleteItem = (item) => ({
    type: DELETE_ITEM,
    payload: item
})

const editItem = (item) => ({
    type: EDIT_ITEM,
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

export const updateItem = (item) => async(dispatch) => {
    let itemId = item.id
    let formData = new FormData();
    formData.append("itemId", itemId)
    formData.append("content", item.content)

    const response = await fetch(`/api/items/${itemId}/edit`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await response.json();
        dispatch(editItem(item));
        return null;
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ["An error occurred. Please try again."];
      }

}

export const removeItem = (itemId) => async (dispatch) => {
    const response = await fetch(`/api/items/${itemId}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: itemId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(deleteItem(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

const initialState = {
    item: {}
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_ITEM:
            return action.payload
        case DELETE_ITEM:
            return state
        case ADD_ITEM:
            return [state] // this wrong, we need to incorporate the new page into the current state
        default:
            return state
    }
}
