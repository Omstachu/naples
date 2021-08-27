const ADD_LIST = 'lists/ADD_LIST'
const GET_LIST = 'lists/GET_LIST'
const DELETE_LIST = 'lists/GET_LIST'

const addList = (list) => ({
    type: ADD_LIST,
    payload: list
})
const getList = (list) => ({
    type: GET_LIST,
    payload: list
})

const deleteList = (list) => ({
    type: DELETE_LIST,
    payload: list
})



export const createList = (pageId, name) => async (dispatch) => {
    let formData = new FormData()

    formData.append("pageId", pageId)
    formData.append("name", name)
    const res = await fetch("/api/lists/", {
        method: "POST",
        body: formData
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(addList(data));
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

export const getAllLists = () => async (dispatch) => {
    const res = await fetch("/api/lists/");

    if (res.ok) {
        const data = await res.json();
        dispatch(getList(data));
    }
}

export const getOneList = (listId) => async (dispatch) => {
    const res = await fetch(`/api/lists/${listId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getList(data));
    }
}

export const removeList = (listId) => async (dispatch) => {
    const response = await fetch(`/api/lists/${listId}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: listId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(deleteList(data));
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
    list: {}
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_LIST:
            return action.payload;
        case DELETE_LIST:
            return state
        case ADD_LIST:
            return [state]; // this wrong, we need to incorporate the new page into the current state
        default:
            return state;
    }
}
