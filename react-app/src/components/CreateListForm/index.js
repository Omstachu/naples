import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createList } from '../../store/list';

function CreateListForm({pageId, hideForm, refresher}){
    const [listName, setListName] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("userId and pageName----------------", userId, pageName)
        const res = await dispatch(createList(pageId, listName))
        // history.push(`/lists/${res.data.id}`)
        setListName("")
        setShowForm(!showForm)
        refresher()
    }

    const updateListName = e => {
        const name = e.target.value;
        setListName(name)
    }

    let formContent = null;

    if (showForm){
        formContent = (
            <>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="Page Name"
                type="text"
                value={listName}
                onChange={updateListName}
                maxLength="40"
            />
            <button>Confirm</button>
            <button onClick={() => setShowForm(!showForm)}>Cancel</button>
            </form>
            </>
        )
    }

    let showFormButton = null;

    if (!showForm) {
        showFormButton = <button onClick={() => setShowForm(!showForm)}>New List</button>
      }

    return (

        <div>
            {formContent}
            {showFormButton}
        </div>

    )

}

export default CreateListForm
