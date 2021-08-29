import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createPage} from '../../store/page';

function CreatePageForm({userId, refresher}){
    const [pageName, setPageName] = useState("")

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await dispatch(createPage(userId, pageName))
        history.push(`/pages/${res.data.id}`)
        setPageName("")
        // refresher()
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
