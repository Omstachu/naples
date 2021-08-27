import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createList } from '../../store/list';

function CreateListForm({pageId, hideForm}){
    const [listName, setListName] = useState("")

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("userId and pageName----------------", userId, pageName)
        const res = await dispatch(createList(pageId, listName))
        history.push(`/lists/${res.data.id}`)
    }

    const updateListName = e => {
        const name = e.target.value;
        setListName(name)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <input
            placeholder="Page Name"
            type="text"
            value={listName}
            onChange={updateListName}
            maxLength="40"
        />
        <button>New List</button>
        </form>
        </div>
    )

}

export default CreateListForm
