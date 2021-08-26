import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
function Page(){
    const [pages, setPages] = useState({});

    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/pages`)
            const page = await res.json()
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
        </ul>
    )
}

export default Page
