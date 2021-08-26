import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getAllPages } from '../../store/page';

function PageList(){
    // const [pages, setPages] = useState({});

    const pages = useSelector(state => state.page)
    const userId = useSelector((state) => state.session.user.id);
    console.log(pages)
    // console.log("userId", userId)
    const dispatch = useDispatch()

    useEffect(() => {
        // (async () => {
        //     const res = await fetch(`/api/pages/`)
        //     const page = await res.json()
        //     console.log("--------------------------page",page)
        //     setPages(page)
        // })()
        dispatch(getAllPages())
    }, [dispatch])


    if(!pages) {
        return null;
    }


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
        <button>New Page</button>
        </ul>
    )
}

export default PageList
