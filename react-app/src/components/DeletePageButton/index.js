import React from "react";
import { useDispatch, } from "react-redux"
import { removePage } from "../../store/page";

const DeletePageButton = ({pageId, refresher}) => {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removePage(pageId));
        refresher()
    };


    return (
    <form onSubmit={handleDelete}>
        <button type="submit">
        Delete Page
        </button>
    </form>
    );
}

export default DeletePageButton
