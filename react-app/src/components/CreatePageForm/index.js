import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { createPage} from '../../store/page';

function CreatePageForm({userId, hideForm}){
    const [pageName, setPageName] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("userId and pageName----------------", userId, pageName)
        const res = await dispatch(createPage(userId, pageName))
        console.log("RESDATA", res)
    }

    const updatePageName = e => {
        const name = e.target.value;
        setPageName(name)
    }

      return (
        <div>
        <form onSubmit={handleSubmit}>
        <input
            placeholder="Page Name"
            type="text"
            value={pageName}
            onChange={updatePageName}
            maxLength="40"
        />
        <button>New Page</button>
        </form>
        </div>
    )
}

export default CreatePageForm
