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

export const createPage = (user, name) => async (dispatch) => {
    let formData = new FormData()
    let new_page = {
        userId: user.id,
        name: name
    }
    formData.append("new_page", new_page );
    const res = await fetch("/api/pages/", {
        method: "POST",
        body: formData,
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
    post: {}
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_PAGE:
            return action.payload
        case ADD_PAGE:
            return {pages: action.payload}
        default:
            return state
    }
}
