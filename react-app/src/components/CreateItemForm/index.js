import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createItem } from '../../store/item';
import "./CreateItemForm.css"
import { confirmButtonImage, cancelButtonImage, createItemButtonImage } from '../images/imgSources';

function CreateItemForm({listId, hideForm, refresher}){
    const [itemContent, setItemContent] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [showFormName, setShowFormName] = useState(true)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("userId and pageContent----------------", userId, pageContent)
        await dispatch(createItem(listId, itemContent))
        setShowForm(!showForm)
        setItemContent("")
        // history.push('/')
        // history.push(`/lists/${listId}`)
        refresher()
    }

    const handleFormToggle = async (e) => {
        e.preventDefault();
        setShowForm(!showForm)
        setShowFormName(!showFormName)
        setItemContent("")
      }

    const updateItemContent = e => {
        const content = e.target.value;
        setItemContent(content)
    }

    let formContent = null

    if(showForm){
        formContent = (
            <>
            <form className="create-form" onSubmit={handleSubmit}>
            <input className="create-form-input"
                placeholder="enter content here"
                type="text"
                value={itemContent}
                onChange={updateItemContent}
                maxLength="40"
            />
            <button className="confirm-button">
                <img className="confirm-button-image" src={confirmButtonImage} alt="create button"/>
            </button>
            <button className="cancel-button" onClick={handleFormToggle}>
                <img className="cancel-button-image" src={cancelButtonImage} alt="create button"/>
            </button>
            </form>
            </>
        )
    }

    let formName = null;

    if (showFormName){
        formName = (
        <h3 className="create-form-button-name">New Item</h3>
        )
    }

    let showFormButton = null

    if (!showForm) {
        // showFormButton = <button id={`edit-toggle-button-${item.id}`} onClick={() => setShowForm(!showForm)}>Edit</button>
        showFormButton = <button className="create-button" onClick={handleFormToggle}>
            <img className="create-button-image" src={createItemButtonImage} alt="create button"/>
            {formName}
        </button>
    }

    return (
        <div>
            {formContent}
            {showFormButton}
        </div>
    )

}

export default CreateItemForm
