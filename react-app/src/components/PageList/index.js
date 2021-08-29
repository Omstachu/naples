import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getAllPages } from '../../store/page';
import EditPageForm from '../EditPageForm';
import CreatePageForm from '../CreatePageForm';
import DeletePageButton from '../DeletePageButton';


function PageList(){
    // const [pages, setPages] = useState({});
    const [refresh, setRefresh] = useState(true)
    const pages = useSelector(state => state.page)
    const userId = useSelector((state) => state.session.user.id);

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
                return <li key={idx}>
                <NavLink to={`/pages/${page.id}`} >{page.name}</NavLink>
                <EditPageForm page={page} refresher={()=>setRefresh(!refresh)}/>
                <DeletePageButton pageId={page.id} refresher={()=>setRefresh(!refresh)}/>
            </li>
            } else {
                return null
            }
        })
    )

    return (
        <ul>
        <li>
        </li>
        <h2>Your Pages</h2>
        <ul>
          {pageNames}
        </ul>
        <CreatePageForm userId={userId} refresher={()=>setRefresh(!refresh)}/>
        </ul>
    )
}

export default PageList
