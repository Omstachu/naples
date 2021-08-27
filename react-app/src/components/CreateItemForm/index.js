import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createItem } from '../../store/item';

function CreateItemForm({listId, hideForm}){
    const [itemContent, setItemContent] = useState("")

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("userId and pageContent----------------", userId, pageContent)
        await dispatch(createItem(listId, itemContent))
        history.push('/')
        history.push(`/lists/${listId}`)
    }

    const updateItemContent = e => {
        const content = e.target.value;
        setItemContent(content)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <input
            placeholder="Page Content"
            type="text"
            value={itemContent}
            onChange={updateItemContent}
            maxLength="40"
        />
        <button>New Item</button>
        </form>
        </div>
    )

}

export default CreateItemForm
