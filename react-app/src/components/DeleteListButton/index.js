import React from "react";
import { useDispatch, } from "react-redux";
import {useHistory} from "react-router-dom"
import { removeList } from "../../store/list";


const DeleteListButton = ({ listId, pageId }) => {
    const dispatch = useDispatch()
    const history = useHistory()



    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeList(listId));
        history.push(`/pages/${pageId}`)
    };


    return (
    <form onSubmit={handleDelete}>
        <button type="submit">
        Delete List
        </button>
    </form>
    );
}

export default DeleteListButton
