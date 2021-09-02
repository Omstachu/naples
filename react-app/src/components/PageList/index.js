import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getAllPages } from '../../store/page';
import EditPageForm from '../EditPageForm';
import CreatePageForm from '../CreatePageForm';
import DeletePageButton from '../DeletePageButton';
import "./PageList.css"


function PageList(){
    // const [pages, setPages] = useState({});
    const [refresh, setRefresh] = useState(true)
    const pages = useSelector(state => state.page)
    const userId = useSelector((state) => state.session.user.id);
    const username = useSelector((state) => state.session.user.username)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPages())
    }, [dispatch, refresh])

    let pageList = []

    if (pages){
        pageList = Object.values(pages)
    }

    const pageNames = (
        pageList.map((page,idx) =>{
        // pages.pages?.map((page,idx) =>{
            if (page.userId === userId){
                return (
                <div className="page-content-container" key={idx}>
                    <NavLink className="page-title-container" to={`/pages/${page.id}`} >
                        <h2 className="page-title">
                            {page.name}
                        </h2>
                        </NavLink>
                    <EditPageForm page={page} refresher={()=>setRefresh(!refresh)}/>
                    <DeletePageButton pageId={page.id} refresher={()=>setRefresh(!refresh)}/>
                 </div>
                    )
            } else {
                return null
            }
        })
    )

    return (
        <div className="pages-page-container">
            <div className="page-content-list-container">
                <h2 className="pages-username">
                {`${username}'s Pages`}
                </h2>
                {pageNames}
            </div>
            <div className="page-create-content-container">
                <CreatePageForm userId={userId} refresher={()=>setRefresh(!refresh)}/>
            </div>
        </div>
    )
}

export default PageList
