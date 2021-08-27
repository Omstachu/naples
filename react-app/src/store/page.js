const ADD_PAGE = 'pages/ADD_PAGE'
const GET_PAGE = 'pages/GET_PAGE'
const DELETE_PAGE = 'pages/DELETE_PAGE'


const addPage = (page) => ({
    type: ADD_PAGE,
    payload: page
})
const getPage = (page) => ({
    type: GET_PAGE,
    payload: page
})

const deletePage = (page) => ({
    type: DELETE_PAGE,
    payload: page
})

export const createPage = (userId, name) => async (dispatch) => {
    let formData = new FormData()

    formData.append("userId", userId)
    formData.append("name", name)
    const res = await fetch("/api/pages/", {
        method: "POST",
        body: formData
      });

    if (res.ok) {
        const data = await res.json();
        dispatch(addPage(data));
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

export const getOnePage = (pageId) => async (dispatch) => {
    const res = await fetch(`/api/pages/${pageId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(getPage(data));
    }
}

export const getAllPages = () => async (dispatch) => {
    const res = await fetch("/api/pages/");

    if (res.ok) {
        const data = await res.json();
        dispatch(getPage(data));
    }
}

export const removePage = (pageId) => async (dispatch) => {
    const response = await fetch(`/api/pages/${pageId}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: pageId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(deletePage(data));
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
    page: {}
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_PAGE:
            return action.payload
        case ADD_PAGE:
            return [state] // this wrong, we need to incorporate the new page into the current state
        default:
            return state
    }
}
