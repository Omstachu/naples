import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createItem } from '../../store/item';

function CreateItemForm({listId, hideForm}){
    const [itemContent, setItemContent] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("userId and pageContent----------------", userId, pageContent)
        await dispatch(createItem(listId, itemContent))
        setShowForm(!showForm)
        history.push('/')
        history.push(`/lists/${listId}`)
    }

    const updateItemContent = e => {
        const content = e.target.value;
        setItemContent(content)
    }

    let formContent = null

    if(showForm){
        formContent = (
            <>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="Page Content"
                type="text"
                value={itemContent}
                onChange={updateItemContent}
                maxLength="40"
            />
            <button>New Item</button>
            <button onClick={() => setShowForm(!showForm)}>Cancel</button>
            </form>
            </>
        )
    }

    let showFormButton = null

    if (!showForm) {
        // showFormButton = <button id={`edit-toggle-button-${item.id}`} onClick={() => setShowForm(!showForm)}>Edit</button>
        showFormButton = <button onClick={() => setShowForm(!showForm)}>New Item</button>
    }

    return (
        <div>
            {formContent}
            {showFormButton}
        </div>
    )

}

export default CreateItemForm
