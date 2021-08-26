import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getAllPages } from '../../store/page';
import CreatePageForm from '../CreatePageForm';


function PageList(){
    // const [pages, setPages] = useState({});

    const pages = useSelector(state => state.page)
    const userId = useSelector((state) => state.session.user.id);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPages())
    }, [dispatch])


    const pageNames = (
      pages.pages?.map((page,idx) =>{
          if (page.userId === userId){
              return <li key={idx}>
             <NavLink to={`/pages/${page.id}`} >{page.name}</NavLink>
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
        <CreatePageForm userId={userId}/>
        </ul>
    )
}

export default PageList
