import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { createList } from '../../store/list';
import { confirmButtonImage, cancelButtonImage, createItemButtonImage} from '../images/imgSources';
import "./CreateListForm.css"

function CreateListForm({pageId, hideForm, refresher, maxLists}){
    const [listName, setListName] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [showFormName, setShowFormName] = useState(true)
    const [validationErrors, setValidationErrors] = useState([])

    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(maxLists){
            setValidationErrors("4 Lists Max.")
            return
        }
        const res = await dispatch(createList(pageId, listName))
        setListName("")
        setShowForm(!showForm)
        setShowFormName(true)
        if (res){
            setValidationErrors(res[0])
        }
        refresher()
    }

    const handleFormToggle = async (e) => {
        e.preventDefault();
        setShowForm(!showForm)
        setShowFormName(!showFormName)
        setListName("")
        setValidationErrors([])
      }


    const updateListName = e => {
        const name = e.target.value;
        setListName(name)
    }

    let formContent = null;

    if (showForm){
        formContent = (
            <>
            <form className="create-list-form" onSubmit={handleSubmit}>
            <input className="create-list-input"
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
        <h3 className="create-form-button-name">New List</h3>
        )
    }


    let showFormButton = null;

    if (!showForm) {
        showFormButton = <button className="create-list-button" onClick={() => {
            setValidationErrors([])
            setShowForm(!showForm)
            setShowFormName(!showFormName)
        }}
        >
        <img className="create-list-button-image list-page" src={createItemButtonImage} alt="create button"/>
        </button>
      }

    return (

        <div className="create-list-button-div">
            {validationErrors}
            {formContent}
            {showFormButton}
            {formName}
        </div>

    )

}

export default CreateListForm
