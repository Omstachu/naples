import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';

function PageList(){
    const [pages, setPages] = useState({});

    const userId = useSelector((state) => state.session.user.id);
    // console.log("userId", userId)

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/pages/`)
            const page = await res.json()
            console.log("--------------------------page",page)
            setPages(page)
        })()
    }, [])


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
