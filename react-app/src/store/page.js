const ADD_PAGE = 'pages/ADD_PAGE'
const GET_PAGE = 'pages/GET_PAGE'

const addPage = (page) => ({
    type: ADD_PAGE,
    payload: page
})
const getPage = (page) => ({
    type: GET_PAGE,
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
