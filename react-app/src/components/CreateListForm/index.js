import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createList } from '../../store/list';
import { confirmButtonImage, cancelButtonImage, createItemButtonImage } from '../images/imgSources';
import "./CreateListForm.css"

function CreateListForm({pageId, hideForm, refresher}){
    const [listName, setListName] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [showFormName, setShowFormName] = useState(false)

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

    const handleFormToggle = async (e) => {
        e.preventDefault();
        setShowForm(!showForm)
        setShowFormName(!showFormName)
        setListName("")
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


    let showFormButton = null;

    if (!showForm) {
        showFormButton = <button className="create-button" onClick={() => setShowForm(!showForm)}>
            <img className="create-button-image" src={createItemButtonImage} alt="create button"/>
            {formName}
        </button>
      }

    return (

        <div className="create-list-button-div">
            {formContent}
            {showFormButton}
        </div>

    )

}

export default CreateListForm
